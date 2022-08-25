import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteListEmptyMessage from "./NoteListEmptyMessage";
import { getInitialData } from "../utils/index";

class NoteBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            archivedNotes: [],
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    };

    onDeleteHandler(id, isArchived) {
        if (isArchived) {
            const archivedNotes = this.state.archivedNotes.filter(note => note.id !== id);
            this.setState({ archivedNotes });
        } else {
            const notes = this.state.notes.filter(note => note.id !== id);
            this.setState({ notes });
        };
    };

    onArchiveHandler(id) {
        const archivedNotes = this.state.notes
            .filter(note => note.id === id)
            .map((note) => {
                return { ...note, archived: true }
            });

        this.setState((previousState) => {
            return {
                archivedNotes: [...previousState.archivedNotes, ...archivedNotes],
            };
        });

        this.onDeleteHandler(id);
    };

    render() {
        return (
            <div className="note-app__body">
                <NoteInput />
                <h2>Catatan Aktif</h2>
                {
                    this.state.notes.length
                        ?
                        <NoteList
                            notes={this.state.notes}
                            onDelete={this.onDeleteHandler}
                            onArchive={this.onArchiveHandler}
                        />
                        :
                        <NoteListEmptyMessage />
                }
                <h2>Arsip</h2>
                {
                    this.state.archivedNotes.length
                        ?
                        <NoteList
                            notes={this.state.archivedNotes}
                            onDelete={this.onDeleteHandler}
                            onArchive={this.onArchiveHandler}
                        />
                        :
                        <NoteListEmptyMessage />
                }
            </div>
        );
    };
};

export default NoteBody;