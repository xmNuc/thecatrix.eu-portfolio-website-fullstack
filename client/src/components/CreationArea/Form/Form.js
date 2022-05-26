import React, { useState, useEffect } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
// import '../../../css/style.css';
import { createPost, updatePost } from '../../../actions/posts';

export const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    titlePl: '',
    message: '',
    messagePl: '',
    info: '',
    infoPl: '',
    builded: '',
    website: '',
    github: '',
    tags: '',
    selectedFile: '',
  });
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: '',
      title: '',
      titlePl: '',
      message: '',
      messagePl: '',
      info: '',
      infoPl: '',
      builded: '',
      website: '',
      github: '',
      tags: '',
      selectedFile: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };
  // className={` ${classes.form}`}
  return (
    <div className="formwrap me-3">
      <form autoComplete="off" noValidate className="create-form" onSubmit={handleSubmit}>
        <div className="h4 mt-3 mb-3">{currentId ? `Editing "${post.title}"` : 'Create Post'}</div>
        <InputGroup className="mb-2 mx-2">
          <InputGroup.Text id="basic-addon1" className="input-group-titile">
            Creator
          </InputGroup.Text>
          <FormControl
            placeholder="Creator"
            aria-label="Creator"
            value={postData.creator}
            onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          />
        </InputGroup>
        <InputGroup className="mb-2 mx-2">
          <InputGroup.Text id="basic-addon1" className="input-group-titile">
            Title
          </InputGroup.Text>
          <FormControl
            placeholder="Title"
            aria-label="Title"
            value={postData.title}
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />
        </InputGroup>
        <InputGroup className="mb-2 mx-2">
          <InputGroup.Text id="basic-addon1" className="input-group-titile">
            Title PL
          </InputGroup.Text>
          <FormControl
            placeholder="Title PL"
            aria-label="Title PL"
            value={postData.titlePl}
            onChange={(e) => setPostData({ ...postData, titlePl: e.target.value })}
          />
        </InputGroup>
        <InputGroup className="mb-2 mx-2">
          <InputGroup.Text id="basic-addon1" className="input-group-titile">
            Msg
          </InputGroup.Text>
          <FormControl
            placeholder="Msg"
            aria-label="Msg"
            value={postData.message}
            onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          />
        </InputGroup>
        <InputGroup className="mb-2 mx-2">
          <InputGroup.Text id="basic-addon1" className="input-group-titile">
            Msg PL
          </InputGroup.Text>
          <FormControl
            placeholder="Msg PL"
            aria-label="Msg PL"
            value={postData.messagePl}
            onChange={(e) => setPostData({ ...postData, messagePl: e.target.value })}
          />
        </InputGroup>
        <InputGroup className="mb-2 mx-2">
          <InputGroup.Text id="basic-addon1" className="input-group-titile">
            Info
          </InputGroup.Text>
          <FormControl
            as="textarea"
            placeholder="Info"
            aria-label="Info"
            value={postData.info}
            onChange={(e) => setPostData({ ...postData, info: e.target.value })}
          />
        </InputGroup>
        <InputGroup className="mb-2 mx-2">
          <InputGroup.Text id="basic-addon1" className="input-group-titile">
            Info PL
          </InputGroup.Text>
          <FormControl
            as="textarea"
            placeholder="Info PL"
            aria-label="Info PL"
            value={postData.infoPl}
            onChange={(e) => setPostData({ ...postData, infoPl: e.target.value })}
          />
        </InputGroup>
        <InputGroup className="mb-2 mx-2">
          <InputGroup.Text id="basic-addon1" className="input-group-titile">
            Builded
          </InputGroup.Text>
          <FormControl
            placeholder="Builded (year)"
            aria-label="Builded"
            value={postData.builded}
            onChange={(e) => setPostData({ ...postData, builded: e.target.value })}
          />
        </InputGroup>
        <InputGroup className="mb-2 mx-2">
          <InputGroup.Text id="basic-addon1" className="input-group-titile">
            Website
          </InputGroup.Text>
          <FormControl
            placeholder="Website"
            aria-label="Website"
            value={postData.website}
            onChange={(e) => setPostData({ ...postData, website: e.target.value })}
          />
        </InputGroup>
        <InputGroup className="mb-2 mx-2">
          <InputGroup.Text id="basic-addon1" className="input-group-titile">
            Github
          </InputGroup.Text>
          <FormControl
            placeholder="Github"
            aria-label="Github"
            value={postData.github}
            onChange={(e) => setPostData({ ...postData, github: e.target.value })}
          />
        </InputGroup>
        <InputGroup className="mb-2 mx-2">
          <InputGroup.Text id="basic-addon1" className="input-group-titile">
            Tags
          </InputGroup.Text>
          <FormControl
            placeholder="Tags (coma , separated)"
            aria-label="Tags"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
          />
        </InputGroup>
        <div className="file-input">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button variant="primary" size="lg" type="submit" className="button-submit">
          Submit
        </Button>
        <Button variant="secondary" size="lg" onClick={clear} className="button-clear">
          Clear
        </Button>
      </form>
    </div>
  );
};
