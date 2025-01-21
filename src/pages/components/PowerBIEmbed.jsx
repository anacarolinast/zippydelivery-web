import React from 'react';

const PowerBIEmbed = () => {
  return (
    <div style={{ maxWidth: '100%', position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        title="zippy-delivery"
        style={{
          position: 'absolute',
          top: 40,
          left: 0,
          width: '100%',
          height: '100%',
          border: '0'
        }}
        src="https://app.powerbi.com/view?r=eyJrIjoiZjA3ZmE4NGEtODUyNS00MTZhLWE2MWEtMTdkMmM3YWU2MTdmIiwidCI6IjUwZGY0NzYyLTJkYTUtNDg5YS05NDVkLTVhOWI5MWU4MTMyNCJ9"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default PowerBIEmbed;
