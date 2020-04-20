import * as React from 'react';
import { addTask, removeTask } from './tasklist/actions';

import { Grid } from 'semantic-ui-react';
import NewTask from './NewTask';


export interface IAppProps {
  addTask: typeof addTask, 
  removeTask: typeof removeTask,
  userId: number,
  selectedTask: string
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Grid centered>
        <Grid.Row>
          <h1>To Do Task List</h1>
        </Grid.Row>
        <Grid.Row>
          <NewTask />
        </Grid.Row>
      </Grid>
    );
  }
}
