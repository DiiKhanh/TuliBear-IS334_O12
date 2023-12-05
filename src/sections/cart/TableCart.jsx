import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { valueLabelFormat } from "~/utils/format.js";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import NumberInput from "~/components/number-input/NumberInput";
import { useCartStore } from "~/store/useCartStore";
import { toast } from "sonner";
import { useRef } from "react";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 16
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));


const TableCart = ({ cartItems }) => {
  const { removeItemFromCart, addItemToCart } = useCartStore();
  const ref = useRef();

  const handleDelete = (id) => {
    removeItemFromCart(id);
    toast.success("Đã xóa ra khỏi giỏ hàng!");
  };

  // console.log(ref.current.getValue());

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sản phẩm</StyledTableCell>
            <StyledTableCell align="right">Giá</StyledTableCell>
            <StyledTableCell align="center">Số lượng</StyledTableCell>
            <StyledTableCell align="right">Tạm tính</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems?.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                <Card sx={{ display: "flex", bgcolor:"inherit", boxShadow:"none" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 120, height:120 }}
                    image={item?.images[0]}
                    alt="image"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {item?.name}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant="subtitle1">
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      color: "text.disabled",
                      textDecoration: "line-through"
                    }}
                  >
                    {item.priceSale && (valueLabelFormat(item.price))}
                  </Typography>
                  &nbsp;
                  {item.priceSale ? (valueLabelFormat(item.priceSale)) : (valueLabelFormat(item.price))}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <NumberInput inStock={item.inStock}
                  quantity={item.quantity}
                  numberInputRef={ref}
                />
              </StyledTableCell>
              <StyledTableCell align="right">{item.priceSale ? valueLabelFormat(item?.priceSale*item.quantity) : valueLabelFormat(item?.price*item.quantity)}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton onClick={() => handleDelete(item.id)}>
                  <ClearIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableCart;