import { ButtonComponent } from 'Components';
import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {};

export default function StartPage({}: Props) {

  const navigate = useNavigate();

  return (
    <div>
      <ButtonComponent type='primary' onClick={() => navigate('/events')}>To Events</ButtonComponent>
      <ButtonComponent type='primary' onClick={() => navigate('/logs')}>To Logs</ButtonComponent>
      <ButtonComponent onClick={() => navigate('/gridexample')}>To grid example</ButtonComponent>
    </div>
  )
}
