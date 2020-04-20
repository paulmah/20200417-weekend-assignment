import * as React from 'react';
import { Grid, Button, Input } from 'semantic-ui-react';

export interface INewTaskProps {
    onClickNewTask: (input: string) => void;
}

interface IState {
    newTask: string;
}

export default class NewTask extends React.Component<INewTaskProps, IState > {
    constructor(props: INewTaskProps) {
        super(props);
        
        this.state = {
            newTask: ""
        }
    }

    private onInputFieldChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        this.setState({ newTask: e.currentTarget.value })
    }

    public render() {
        const { onClickNewTask } = this.props;
        const { newTask } = this.state;

        let changedTaskList = [
            {
                id: 1,
                newTask: "Laundry",
            },
            {
                id: 2,
                newTask: "Make Dinnere",
            },
        ]

        return (
            <Grid>
                <Grid.Row centered>
                    <h1>Input Section</h1>
                </Grid.Row>
                <Grid.Row centered>
                    <Input placeholder='Enter New Task...' onChange={this.onInputFieldChange} />
                </Grid.Row>
                <Grid.Row centered>
                    <Button
                        content="Submit New Task"
                        color="green"
                        onClick={() => onClickNewTask(newTask)} />
                </Grid.Row>
            </Grid>
        );
    }
}
