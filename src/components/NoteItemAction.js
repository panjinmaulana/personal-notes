import React from "react";

function NoteItemAction() {
    return (
        <div className="note-item__action">
            <button type="button" className="note-item__delete-button">Delete</button>
            <button type="button" className="note-item__archive-button">Arsipkan</button>
        </div>
    );
};

export default NoteItemAction;