import React, { Component } from 'react';

function Band(props) {

    return(
      <li>
        {props.band}
        <button onClick={() => props.deleteBand(props.id)}>DELETE</button>
      </li>
    );
};

export default Band;
