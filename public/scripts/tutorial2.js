var CommentList = React.createClass(
    {render:function ()
     { return (
         <div className="commentList">
         Hello,World! I am a CommentList.
         </div>);
     }});




var CommentForm = React.createClass(
  {
    render:function () {
      return (
          <div className="commentForm">
          Hello, world! I am commentForm.
          </div>);
    }});




var CommentBox =React.createClass({
  render:function() {
    return (
        <div className="CommentBox">
        <h1>comments</h1>
        <CommentList />
        <CommentForm />
        </div>
    );
  }});


ReactDOM.render(
    <CommentBox />,
  document.getElementById('content')
);
