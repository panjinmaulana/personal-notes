import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteListEmptyMessage from "./NoteListEmptyMessage";

function NoteBody({notes, archivedNotes, onDelete, onArchive}) {
    return (
        <div className="note-app__body">
            <NoteInput />
            <h2>Catatan Aktif</h2>
            {
                notes.length
                    ?
                    <NoteList
                        notes={notes}
                        onDelete={onDelete}
                        onArchive={onArchive}
                    />
                    :
                    <NoteListEmptyMessage />
            }
            <h2>Arsip</h2>
            {
                archivedNotes.length
                    ?
                    <NoteList
                        notes={archivedNotes}
                        onDelete={onDelete}
                        onArchive={onArchive}
                    />
                    :
                    <NoteListEmptyMessage />
            }
        </div>
    );
};

export default NoteBody;