/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from 'react';

import { ProfileDetail } from '../component/ProfileDetail'

export default function ProfilePageDetail() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <ProfileDetail />
        </div>
      </div>
    </>
  )
}