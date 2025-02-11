import React from 'react';
import PowerBIEmbed from '../components/PowerBIEmbed';
import useNewPedidoNotification from '../../hooks/UseNewPedidoNotification';

const Dashboard = () => {
  useNewPedidoNotification();

  return (
    <div>
      <PowerBIEmbed />
    </div>
  );
};

export default Dashboard;
