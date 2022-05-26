import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createPost = async (req, res) => {
  const {
    creator,
    title,
    titlePl,
    message,
    messagePl,
    info,
    infoPl,
    builded,
    website,
    github,
    selectedFile,
    tags,
  } = req.body;

  const newPostMessage = new PostMessage({
    creator,
    title,
    titlePl,
    message,
    messagePl,
    info,
    infoPl,
    builded,
    website,
    github,
    tags,
    selectedFile,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const {
    creator,
    title,
    titlePl,
    message,
    messagePl,
    info,
    infoPl,
    builded,
    website,
    github,
    selectedFile,
    tags,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = {
    creator,
    title,
    titlePl,
    message,
    messagePl,
    info,
    infoPl,
    builded,
    website,
    github,
    tags,
    selectedFile,
    _id: id,
  };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: 'Post deleted successfully.' });
};

export default router;
