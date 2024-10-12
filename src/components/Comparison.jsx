import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  //   Grid2,
  //   InputAdornment,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  //   Select,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion } from "framer-motion";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";

function Comparison() {
  const { t } = useTranslation();

  // States for handling customer dialog and selection
  const [open, setOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const [data, setData] = useState({
    supplier: "",
    grams: "",
    paperType: "",
    pricePerUnit: "",
    totalGrams: 0,
    totalPrice: 0,
  });
  const [data2, setData2] = useState({
    supplier: "",
    grams: "",
    paperType: "",
    pricePerUnit: "",
    totalGrams: 0,
    totalPrice: 0,
  });
  const [data3, setData3] = useState({
    supplier: "",
    grams: "",
    paperType: "",
    pricePerUnit: "",
    totalGrams: 0,
    totalPrice: 0,
  });

  const [pricingData1, setPricingData1] = useState({
    wastePercentage: "",
    operatingExpenses: "",
    profitMargin: "",
    annualFactorC: "",
    averagePaperCost: "",
    additionalOperatingExpenses: "",
    profit: "",
    profitPercentage: "",
    totalPricePerTon: "",
    boxWeight: "",
    exPrice: "",
  });

  const [pricingData2, setPricingData2] = useState({
    wastePercentage: "",
    operatingExpenses: "",
    profitMargin: "",
    annualFactorC: "",
    averagePaperCost: "",
    additionalOperatingExpenses: "",
    profit: "",
    profitPercentage: "",
    totalPricePerTon: "",
    boxWeight: "",
    exPrice: "",
  });
  const [pricingData3, setPricingData3] = useState({
    wastePercentage: "",
    operatingExpenses: "",
    profitMargin: "",
    annualFactorC: "",
    averagePaperCost: "",
    additionalOperatingExpenses: "",
    profit: "",
    profitPercentage: "",
    totalPricePerTon: "",
    boxWeight: "",
    exPrice: "",
  });

  const handlePricingChange = (e, setPricingData) => {
    const { name, value } = e.target;
    setPricingData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setData2((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputChange3 = (e) => {
    const { name, value } = e.target;
    setData3((prev) => ({ ...prev, [name]: value }));
  };

  // Dummy customer data
  const customers = [
    { id: 1, name: "Customer A" },
    { id: 2, name: "Customer B" },
    { id: 3, name: "Customer C" },
  ];

  // Open and close dialog functions
  const handleTextFieldClick = () => {
    setOpen(true);
    setFilteredCustomers(customers);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handle customer selection
  const handleCustomerSelect = (customer) => {
    setCustomerName(customer.name);
    setCustomerId(customer.id);
    handleClose();
  };

  // Handle search functionality
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredCustomers(
      customers.filter((customer) => customer.name.toLowerCase().includes(term))
    );
  };

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Done */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
              <Typography
              variant="h6"
              sx={{ mb: 2, backgroundColor: "#E0E0E0", p: "20px" }}
            >{t('ItemsDetails')}</Typography>
          <Grid2 container justifyContent="space-between" sx={{ gap: "30px" }}>

        
            <Grid2
              size={{ md: 4 }}
              sx={{
                border: "1px solid #ccc",
                p: "10px",
                width: "100%",
                borderRadius: "10px",
              }}
            >

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "45%",
                  }}
                >
                  <TextField label={t("movementNumber")} fullWidth />
                  <TextField
                    label={t("movementDate")}
                    type="date"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField label={t("boxType")} fullWidth select>
                    <MenuItem value="type1">{t("type1")}</MenuItem>
                    <MenuItem value="type2">{t("type2")}</MenuItem>
                    <MenuItem value="type3">{t("type3")}</MenuItem>
                  </TextField>
                  <TextField label={t("tab")} fullWidth />
                </Box>

                <Box
                  sx={{
                    width: "45%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <TextField
                    sx={{ width: "100%", my: "5px" }}
                    label={t("customerName")}
                    value={customerName}
                    onClick={handleTextFieldClick}
                    readOnly
                  />

                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{t("searchForCustomer")}</DialogTitle>
                    <DialogContent>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {t("selectCustomerFromList")}
                      </Typography>

                      <TextField
                        label={t("searchCustomer")}
                        value={searchTerm}
                        onChange={handleSearchChange}
                        fullWidth
                        margin="normal"
                      />

                      <List>
                        {filteredCustomers.length > 0 ? (
                          filteredCustomers.map((customer) => (
                            <ListItem
                              button
                              key={customer.id}
                              onClick={() => handleCustomerSelect(customer)}
                            >
                              <ListItemText primary={customer.name} />
                            </ListItem>
                          ))
                        ) : (
                          <ListItem>
                            <ListItemText primary={t("noMatchingResults")} />
                          </ListItem>
                        )}
                      </List>

                      <TextField
                        label={t("customerId")}
                        value={customerId}
                        fullWidth
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                      <TextField
                        label={t("customerName")}
                        value={customerName}
                        fullWidth
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        {t("close")}
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              </Box>
            </Grid2>

            <Grid2 size={{ xs:12, md: 4 }}>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  padding: "20px",
                  width: "100%",
                  borderRadius: "10px",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <TableContainer>
                  <Table>
                    <TableHead sx={{ }}>
                      <TableRow>
                        <TableCell>{t("boxName")}</TableCell>
                        <TableCell>{t("length")}</TableCell>
                        <TableCell>{t("width")}</TableCell>
                        <TableCell>{t("height")}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{t("doubleBrownSimpleBox")}</TableCell>
                        <TableCell>
                          <TextField
                            sx={{ width: "100%", }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            sx={{ width: "100%", }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            sx={{ width: "100%",  }}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{t("boxWeight")}</TableCell>
                        <TableCell>
                          <TextField
                            sx={{ width: "100%",}}
                          />
                        </TableCell>
                        <TableCell colSpan={2}></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid2>




            <Grid2 size={{ xs: 12, md: 3 }}>
          <motion.div
            sx={{
              border: "1px solid #ccc",
              p: "20px",
              width: "100%",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor: "#f9f9f9",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              sx={{ mb: 2, backgroundColor: "#E0E0E0", p: "20px" }}
            >
              {t("surfaceDimensions")} {/* ترجمة النص */}
            </Typography>
            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
                  <TableRow>
                    <TableCell>{t("dimension")}</TableCell> {/* ترجمة النص */}
                    <TableCell>{t("value")}</TableCell> {/* ترجمة النص */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{t("length")}</TableCell> {/* ترجمة النص */}
                    <TableCell>
                      <TextField
                        name="length"
                        fullWidth
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t("width")}</TableCell> {/* ترجمة النص */}
                    <TableCell>
                      <TextField
                        name="width"
                        fullWidth
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </motion.div>
        </Grid2>
          </Grid2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Grid2 container sx={{ mt: "20px" }}>
            {/* Done */}




            <Grid2
              size={{ xs: 12, md: 4 }}
              sx={{
                border: "1px solid #ccc",
                p: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
             
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, backgroundColor:'#E0E0E0', p:'20px' }}>
                {t("pricingTable1")} {/* Pricing Table 1 */}
              </Typography>
              <TableContainer
                sx={{ height: "auto", }}
                component={""}
              >
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={11}>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                          }}
                        >
                          {Object.keys(pricingData1).map((key) => (
                            <TextField
                              key={key}
                              name={key}
                              label={t(key)} // استخدام المفتاح مباشرة للحصول على الترجمة
                              value={pricingData1[key]}
                              onChange={(e) =>
                                handlePricingChange(e, setPricingData1)
                              }
                              fullWidth
                              variant="outlined"
                              sx={{ width: "45%" }}
                            />
                          ))}
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Box
                sx={{
                  border: "1px solid #ccc",
                  width: "100%",
                  mt: "30px",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
                >
                  <Select
                    name="supplier"
                    value={data.supplier}
                    onChange={handleInputChange}
                    fullWidth
                    displayEmpty
                    inputProps={{ "aria-label": t("selectSupplier") }} // Select Supplier
                  >
                    <MenuItem value="" disabled>
                      {t("selectSupplier")} {/* Select Supplier */}
                    </MenuItem>
                    <MenuItem value="Supplier 1">{t("supplier1")}</MenuItem>
                    <MenuItem value="Supplier 2">{t("supplier2")}</MenuItem>
                    <MenuItem value="Supplier 3">{t("supplier3")}</MenuItem>
                  </Select>

                  <TextField
                    name="grams"
                    type="number"
                    value={data.grams}
                    onChange={handleInputChange2}
                    fullWidth
                    label={t("grams")} // Grams
                  />

                  <Select
                    name="paperType"
                    value={data.paperType}
                    onChange={handleInputChange}
                    fullWidth
                    displayEmpty
                    inputProps={{ "aria-label": t("selectPaperType") }} // Select Paper Type
                  >
                    <MenuItem value="" disabled>
                      {t("selectPaperType")} {/* Select Paper Type */}
                    </MenuItem>
                    <MenuItem value="Type A">{t("typeA")}</MenuItem>
                    <MenuItem value="Type B">{t("typeB")}</MenuItem>
                    <MenuItem value="Type C">{t("typeC")}</MenuItem>
                  </Select>

                  <TextField
                    name="pricePerUnit"
                    type="number"
                    value={data.pricePerUnit}
                    onChange={handleInputChange}
                    fullWidth
                    label={t("pricePerUnit")} // Price per Unit (Excluding VAT)
                  />

                  <TextField
                    name="totalGrams"
                    type="number"
                    value={data.totalGrams}
                    onChange={handleInputChange}
                    fullWidth
                    label={t("totalGrams")} // Total Grams
                  />
                </Box>
              </Box>
            </Grid2>

          

            <Grid2
              size={{ xs: 12, md: 4 }}
              sx={{
                border: "1px solid #ccc",
                p: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
      
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, backgroundColor:'#E0E0E0', p:'20px' }}>
                {t("pricingTable2")} {/* Pricing Table 2 */}
              </Typography>
              <TableContainer sx={{ height: "auto", }} component={""} >
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={11}>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                          }}
                        >
                          {Object.keys(pricingData2).map((key) => (
                            <TextField
                              key={key}
                              name={key}
                              label={t(key)} // استخدام المفتاح مباشرة للحصول على الترجمة
                              value={pricingData2[key]}
                              onChange={(e) =>
                                handlePricingChange(e, setPricingData2)
                              }
                              fullWidth
                              variant="outlined"
                              sx={{ width: "45%" }}
                            />
                          ))}
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Box
                sx={{
                  border: "1px solid #ccc",
                  width: "100%",
                  mt: "30px",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
                >
                  <Select
                    name="supplier"
                    value={data2.supplier}
                    onChange={handleInputChange2}
                    fullWidth
                    displayEmpty
                    inputProps={{ "aria-label": t("selectSupplier") }} // Select Supplier
                  >
                    <MenuItem value="" disabled>
                      {t("selectSupplier")} {/* Select Supplier */}
                    </MenuItem>
                    <MenuItem value="Supplier 1">{t("supplier1")}</MenuItem>
                    <MenuItem value="Supplier 2">{t("supplier2")}</MenuItem>
                    <MenuItem value="Supplier 3">{t("supplier3")}</MenuItem>
                  </Select>

                  <TextField
                    name="grams"
                    type="number"
                    value={data2.grams}
                    onChange={handleInputChange2}
                    fullWidth
                    label={t("grams")} // Grams
                  />

                  <Select
                    name="paperType"
                    value={data2.paperType}
                    onChange={handleInputChange2}
                    fullWidth
                    displayEmpty
                    inputProps={{ "aria-label": t("selectPaperType") }} // Select Paper Type
                  >
                    <MenuItem value="" disabled>
                      {t("selectPaperType")} {/* Select Paper Type */}
                    </MenuItem>
                    <MenuItem value="Type A">{t("typeA")}</MenuItem>
                    <MenuItem value="Type B">{t("typeB")}</MenuItem>
                    <MenuItem value="Type C">{t("typeC")}</MenuItem>
                  </Select>

                  <TextField
                    name="pricePerUnit"
                    type="number"
                    value={data2.pricePerUnit}
                    onChange={handleInputChange2}
                    fullWidth
                    label={t("pricePerUnit")} // Price per Unit (Excluding VAT)
                  />

                  <TextField
                    name="totalGrams"
                    type="number"
                    value={data2.totalGrams}
                    onChange={handleInputChange2}
                    fullWidth
                    label={t("totalGrams")} // Total Grams
                  />
                </Box>
              </Box>
            </Grid2>

            <Grid2
              size={{ xs: 12, md: 4 }}
              sx={{
                border: "1px solid #ccc",
                p: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, backgroundColor:'#E0E0E0', p:'20px'  }}>
                {t("pricingTable3")} {/* Pricing Table 3 */}
              </Typography>
              <TableContainer sx={{ height: "auto" }} component={""}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={11}>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                          }}
                        >
                          {Object.keys(pricingData3).map((key) => (
                            <TextField
                              key={key}
                              name={key}
                              label={t(key)} // استخدام المفتاح مباشرة للحصول على الترجمة
                              value={pricingData3[key]}
                              onChange={(e) =>
                                handlePricingChange(e, setPricingData3)
                              }
                              fullWidth
                              variant="outlined"
                              sx={{ width: "45%" }}
                            />
                          ))}
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Box
                sx={{
                  border: "1px solid #ccc",
                  width: "100%",
                  mt: "30px",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
                >
                  <Select
                    name="supplier"
                    value={data3.supplier}
                    onChange={handleInputChange3}
                    fullWidth
                    displayEmpty
                    inputProps={{ "aria-label": t("selectSupplier") }} // Select Supplier
                  >
                    <MenuItem value="" disabled>
                      {t("selectSupplier")} {/* Select Supplier */}
                    </MenuItem>
                    <MenuItem value="Supplier 1">{t("supplier1")}</MenuItem>
                    <MenuItem value="Supplier 2">{t("supplier2")}</MenuItem>
                    <MenuItem value="Supplier 3">{t("supplier3")}</MenuItem>
                  </Select>

                  <TextField
                    name="grams"
                    type="number"
                    value={data3.grams}
                    onChange={handleInputChange3}
                    fullWidth
                    label={t("grams")} // Grams
                  />

                  <Select
                    name="paperType"
                    value={data3.paperType}
                    onChange={handleInputChange3}
                    fullWidth
                    displayEmpty
                    inputProps={{ "aria-label": t("selectPaperType") }} // Select Paper Type
                  >
                    <MenuItem value="" disabled>
                      {t("selectPaperType")} {/* Select Paper Type */}
                    </MenuItem>
                    <MenuItem value="Type A">{t("typeA")}</MenuItem>
                    <MenuItem value="Type B">{t("typeB")}</MenuItem>
                    <MenuItem value="Type C">{t("typeC")}</MenuItem>
                  </Select>

                  <TextField
                    name="pricePerUnit"
                    type="number"
                    value={data3.pricePerUnit}
                    onChange={handleInputChange3}
                    fullWidth
                    label={t("pricePerUnit")} // Price per Unit (Excluding VAT)
                  />

                  <TextField
                    name="totalGrams"
                    type="number"
                    value={data3.totalGrams}
                    onChange={handleInputChange3}
                    fullWidth
                    label={t("totalGrams")} // Total Grams
                  />
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Comparison;
