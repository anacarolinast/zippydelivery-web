import React from 'react';
import PowerBIEmbed from '../components/PowerBIEmbed';
import GeneratePDFButton from '../components/generatePDFButton';
import GeneratePDFButtonWithModal from '../components/generatePDFButton';

const Dashboard = () => {
  return (
    <div>
      <PowerBIEmbed />
      <GeneratePDFButtonWithModal/>
    </div>
  );
};

export default Dashboard;
