import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class TextArea extends Component {
  render() {
    return (
      <div className="editor">
        
        <CKEditor
          editor={ ClassicEditor }
          data="<p>Write your post here!</p>"
          onInit={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( "Editor is ready to use!", editor );
          } }
          onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
          } }
          onBlur={ editor => {
            console.log( "Blur.", editor );
          } }
          onFocus={ editor => {
            console.log( "Focus.", editor );
          } }
        />
      </div>
    );
  }
}