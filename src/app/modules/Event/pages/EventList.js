/* eslint-disable no-restricted-imports */
import React, {useState, useEffect} from 'react';

import {Event} from '../component/Event'

export default function EventList() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Event />
        </div>
      </div>
    </>
  )
}