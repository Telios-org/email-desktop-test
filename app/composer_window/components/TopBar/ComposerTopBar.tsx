import React, { Component } from 'react';
import WindowControls from '../../../global_components/WindowControls/WindowControls';
import styles from './ComposerTopBar.css';

type Props = {
  // this object would hold any props not coming from redux
};

type State = {};

class ComposerTopBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={`w-full flex flex-row items-center ${styles.composerTopBar}`}
      >
        <div className={`flex-grow-0 w-1/3 ${styles.draggable}`} />
        <div className="flex-grow">
        </div>
        <div
          className={`flex-grow-0 flex flex-row items-center mr-6 w-1/3 ${styles.noDrag} justify-end`}
        >
          <WindowControls />
        </div>
      </div>
    );
  }
}

export default ComposerTopBar;
