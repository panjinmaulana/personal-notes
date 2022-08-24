import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteListEmptyMessage from "./NoteListEmptyMessage";

function NoteBody({ notes, showFormattedDate }) {
    return (
        <div className="note-app__body">
            <NoteInput />
            {
                notes.length
                    ?
                    <>
                        <h2>Catatan Aktif</h2>
                        <NoteList notes={notes} showFormattedDate={showFormattedDate} />
                    </>
                    :
                    <NoteListEmptyMessage />
            }
            {
                notes.length
                    ?
                    <>
                        <h2>Arsip</h2>
                        <NoteList notes={notes} showFormattedDate={showFormattedDate} />
                    </>
                    :
                    <NoteListEmptyMessage />
            }
        </div>
    );
};

export default NoteBody;