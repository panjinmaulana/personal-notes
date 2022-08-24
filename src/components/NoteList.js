import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteList({ notes, showFormattedDate }) {
    return (
        <div className="notes-list">
            {notes.map((note) => <div key={note.id} className="note-item">
                <NoteItemContent note={note} showFormattedDate={showFormattedDate} />
                <NoteItemAction />
            </div>)}
        </div>
    );
};

export default NoteList;