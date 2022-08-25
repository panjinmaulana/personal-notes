import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteList({ notes, onDelete, onArchive }) {
    return (
        <div className="notes-list">
            {notes.map((note) =>
                <div key={note.id} className="note-item">
                    <NoteItemContent
                        note={note}
                    />
                    <NoteItemAction
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        isArchived={note.archived}
                    />
                </div>)}
        </div>
    );
};

export default NoteList;