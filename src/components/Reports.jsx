import { Box, Button, TextField, Typography, Grid2 } from '@mui/material';
import { useTranslation } from 'react-i18next'; // استيراد الدالة useTranslation

const Reports = () => {
  const { t } = useTranslation(); // استخدام الدالة

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {t('reportsScreen')} {/* استخدم مفتاح الترجمة */}
      </Typography>
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 6 }}>
          <TextField
            label={t('startDate')} // استخدم مفتاح الترجمة
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <TextField
            label={t('endDate')} // استخدم مفتاح الترجمة
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <TextField
            label={t('itemCode')} // استخدم مفتاح الترجمة
            fullWidth
          />
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <TextField
            label={t('itemName')} // استخدم مفتاح الترجمة
            fullWidth
          />
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <TextField
            label={t('customerCode')} // استخدم مفتاح الترجمة
            fullWidth
          />
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <TextField
            label={t('customerName')} // استخدم مفتاح الترجمة
            fullWidth
          />
        </Grid2>
      </Grid2>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {t('buttonGroup')} {/* استخدم مفتاح الترجمة */}
        </Typography>
        <Grid2 container spacing={2}>
          {[
            'pricingStatementPeriod',
            'pricingStatementPeriodApproved',
            'pricingStatementPeriodNotApproved',
            'pricingStatementPeriodItem',
            'pricingStatementPeriodApprovedItem',
            'pricingStatementPeriodNotApprovedItem',
            'pricingStatementPeriodCustomer',
            'pricingStatementPeriodApprovedCustomer',
            'pricingStatementPeriodNotApprovedCustomer',
            'latestPricesListByCustomer',
            'latestPricesListByItem',
            'latestPricesListCustomer',
            'latestPricesListItem'
          ].map((key, index) => (
            <Grid2 size={{ xs: 6 }} key={index}>
              <Button variant="contained" color="primary" fullWidth>
                {t(key)} {/* استخدم مفتاح الترجمة */}
              </Button>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default Reports;
