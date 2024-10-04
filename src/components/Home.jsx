import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTranslation } from "react-i18next";
// import { LanguageContext } from "./Context/Context";

function Home() {
  let { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  // const { sideBarOpen } = useContext(LanguageContext);

  const [customerList] = useState([
    { id: "1", name: "Customer A" },
    { id: "2", name: "Customer B" },
    { id: "3", name: "Customer C" },
    { id: "4", name: "Customer D" },
    { id: "5", name: "Customer E" },
    { id: "6", name: "Customer F" },
    { id: "7", name: "Customer G" },
    // أضف المزيد من العملاء حسب الحاجة
  ]);

  const handleTextFieldClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSearchTerm(""); // إعادة تعيين قيمة البحث عند الإغلاق
  };

  const handleCustomerSelect = (customer) => {
    setCustomerId(customer.id);
    setCustomerName(customer.name);
    handleClose();
  };

  // تصفية العملاء بناءً على قيمة البحث
  const filteredCustomers = customerList.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [data, setData] = useState({
    supplier: "",
    grams: "",
    paperType: "",
    pricePerUnit: "",
    totalGrams: 0,
    totalPrice: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
      totalGrams: name === "grams" ? value : data.grams, // Update total grams if grams field changes
      totalPrice: name === "pricePerUnit" ? value : data.pricePerUnit, // Update total price if price field changes
    });
  };

  return (
    <Box
      sx={{
        paddingTop: "80px",
        paddingLeft: "40px",
      }}
    >
      <Grid2 container sx={{ gap: "50px" }}>
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
        >
          {/* Done */}
          {/* First Box */}
          <Box sx={{ border: "1px solid #ccc", p: "20px" }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  width: "45%",
                }}
              >
                <TextField label={t("statementNumber")} fullWidth />
                <TextField label={t("statementDate")} fullWidth />
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
                <TextField label={t("wastePercentage")} fullWidth />
                <TextField label={t("operatingExpenses")} fullWidth />
                <TextField label={t("profitMargin")} fullWidth />
                <TextField label={t("annualFactorC")} fullWidth />
                <TextField label={t("annualFactorB")} fullWidth />
              </Box>

              <Box>
                <Box>
                  <TextField
                    sx={{ width: "100%", my: "5px" }}
                    label={t("customerName")} // ترجمة النص
                    value={customerName}
                    onClick={handleTextFieldClick}
                    readOnly
                  />

                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{t("searchCustomerData")}</DialogTitle>
                    <DialogContent>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {t("selectCustomerFromList")}
                      </Typography>

                      <TextField
                        label={t("searchCustomer")}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                        label={t("customerNumber")}
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
                <TextField sx={{ width: "100%" }} label={t("boxName")} />
              </Box>
            </Box>
          </Box>
          {/* Done */}
          {/* Second Box - Table 1 */}
          <Box sx={{ border: "1px solid #ccc", p: "20px", width: "100%" }}>
            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
                  <TableRow>
                    <TableCell>{t("boxName")}</TableCell> {/* ترجمة النص */}
                    <TableCell>{t("length")}</TableCell> {/* ترجمة النص */}
                    <TableCell>{t("width")}</TableCell> {/* ترجمة النص */}
                    <TableCell>{t("height")}</TableCell> {/* ترجمة النص */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{t("doubleBrownSimpleBox")}</TableCell>{" "}
                    {/* ترجمة النص */}
                    <TableCell>
                      <TextField
                        sx={{ width: "100%", backgroundColor: "white" }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        sx={{ width: "100%", backgroundColor: "white" }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        sx={{ width: "100%", backgroundColor: "white" }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t("boxWeight")}</TableCell> {/* ترجمة النص */}
                    <TableCell>
                      <TextField
                        sx={{ width: "100%", backgroundColor: "white" }}
                      />
                    </TableCell>
                    <TableCell colSpan={2}></TableCell>{" "}
                    {/* خلايا فارغة للحفاظ على الهيكل */}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Done */}
          {/* Third Box - Table 2 */}
          <Box
            sx={{
              border: "1px solid #ccc",
              p: "20px",
              width: "100%",
              mt: "30px",
              borderRadius: "5px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              {t("costAndProfitSummary")} {/* ترجمة النص */}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <Select
                name="supplier"
                value={data.supplier}
                onChange={handleInputChange}
                fullWidth
                displayEmpty
                inputProps={{ "aria-label": t("selectSupplier") }} // الترجمة هنا
              >
                <MenuItem value="" disabled>
                  {t("selectSupplier")} {/* ترجمة النص */}
                </MenuItem>
                <MenuItem value="Supplier 1">{t("supplier1")}</MenuItem>
                <MenuItem value="Supplier 2">{t("supplier2")}</MenuItem>
                <MenuItem value="Supplier 3">{t("supplier3")}</MenuItem>
              </Select>

              <TextField
                name="grams"
                type="number"
                value={data.grams}
                onChange={handleInputChange}
                fullWidth
                label={t("grams")} // ترجمة النص
              />

              <Select
                name="paperType"
                value={data.paperType}
                onChange={handleInputChange}
                fullWidth
                displayEmpty
                inputProps={{ "aria-label": t("selectPaperType") }} // الترجمة هنا
              >
                <MenuItem value="" disabled>
                  {t("selectPaperType")} {/* ترجمة النص */}
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
                label={t("pricePerUnit")} // ترجمة النص
              />

              <TextField
                name="totalGrams"
                type="number"
                value={data.totalGrams}
                onChange={handleInputChange}
                fullWidth
                label={t("totalGrams")} // ترجمة النص
              />
            </Box>
          </Box>
        </Grid2>
        {/* Done */}
        <Grid2 size={{ xs: 12, md: 3.5}}>
          <Box sx={{ border: "1px solid #ccc", p: "20px", width: "100%" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
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
          </Box>

          <Box
            sx={{
              border: "1px solid #ccc",
              p: "20px",
              width: "100%",
              mt: "30px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              {t("costAndProfitSummary")}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <TextField
                name="averagePaperCost"
                fullWidth
                label={t("averagePaperCost")}
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  maxLength: 7,
                }}
                onChange={handleInputChange}
              />

              <TextField
                name="averageOperatingCost"
                fullWidth
                label={t("averageOperatingCost")}
                onChange={handleInputChange}
              />

              <TextField
                name="profit"
                fullWidth
                label={t("profit")}
                onChange={handleInputChange}
              />

              <TextField
                name="profitPercentage"
                fullWidth
                label={t("profitPercentage")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                onChange={handleInputChange}
              />

              <TextField
                name="totalPriceExcludingVAT"
                fullWidth
                label={t("totalPriceExcludingVAT")}
                onChange={handleInputChange}
              />

              <TextField
                name="totalPriceIncludingVAT"
                fullWidth
                label={t("totalPriceIncludingVAT")}
                onChange={handleInputChange}
              />
            </Box>
          </Box>
        </Grid2>

        {/* Done */}
        <Grid2 size={{ xs: 12, md: 3 }}>
          <Box
            sx={{
              border: "1px solid #ccc",
              p: "20px",
              width: "100%",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              {t("userInformation")}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <TextField label={t("createdBy")} variant="outlined" fullWidth />
              <TextField
                label={t("creationDate")}
                type="date"
                variant="outlined"
                fullWidth
                slotProps={{
                  inputLabel: {
                    style: {
                      transform: "translate(2px,-8px)",
                    },
                  },
                }}
              />
              <TextField label={t("modifiedBy")} variant="outlined" fullWidth />
              <TextField
                label={t("modificationDate")}
                type="date"
                variant="outlined"
                fullWidth
                slotProps={{
                  inputLabel: {
                    style: {
                      transform: "translate(2px,-8px)",
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Home;
