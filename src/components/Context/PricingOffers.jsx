import { useState } from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const PricingOffers = () => {
  const [offers] = useState([
    { date: '2024-10-01', admin: 'Admin 1', pdf: 'offer1.pdf' },
    { date: '2024-10-02', admin: 'Admin 2', pdf: 'offer2.pdf' },
    { date: '2024-10-03', admin: 'Admin 3', pdf: 'offer3.pdf' },
  ]);

  const exportToPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [['Date', 'Admin Name', 'PDF']],
      body: offers.map(offer => [offer.date, offer.admin, offer.pdf]),
    });
    doc.save('pricing_offers.pdf');
  };

  return (
    <Box 
      sx={{ 
        // padding: 2, 
        // width: '100%', 
        // maxWidth: '1200px', 
        // margin: '0 auto', // ليكون في المنتصف
        // boxSizing: 'border-box' // يحسب البادينج ضمن الحجم الكلي
      }}
    >
      <Typography variant="h4" gutterBottom>
        Previous Pricing Offers
      </Typography>
      <Button 
        variant="contained" 
        onClick={exportToPDF} 
        sx={{ marginBottom: 2 }}
      >
        Export as PDF
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Admin Name</TableCell>
              <TableCell>PDF</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {offers.map((offer, index) => (
              <TableRow key={index}>
                <TableCell>{offer.date}</TableCell>
                <TableCell>{offer.admin}</TableCell>
                <TableCell>
                  <a href={offer.pdf} target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PricingOffers;
