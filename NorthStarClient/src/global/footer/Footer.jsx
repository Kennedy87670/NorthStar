import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { shades } from "../../theme";
import paypal from "../../assets/PayPal.png";
import visa from "../../assets/visa.png";
import visaElectron from "../../assets/visaElectron.png";
import MasterCard from "../../assets/MasterCard.png";
import { useTheme } from "@emotion/react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* one */}
          <div className="footer-column">
            <h3 className="columnheader">Company info</h3>
            <h4 className="columnames">About Us</h4>
            <h4 className="columnames">Latest Posts</h4>
            <h4 className="columnames">Contact Us</h4>
            <h4 className="columnames">Shop</h4>
          </div>
          {/* two */}
          <div className="footer-column">
            <h3 className="columnheader">HELP LINKS</h3>
            <h4 className="columnames">Tracking</h4>
            <h4 className="columnames">Order Status</h4>
            <h4 className="columnames">Delivery</h4>
            <h4 className="columnames">Shipping Info</h4>
            <h4 className="columnames">FAQ</h4>
          </div>

          {/* three */}
          <div className="footer-column">
            <h3 className="columnheader">USEFUL LINKS</h3>
            <h4 className="columnames">Special Offers</h4>
            <h4 className="columnames">Gift Cards</h4>
            <h4 className="columnames">Advertising</h4>
            <h4 className="columnames">Terms of Use</h4>
          </div>

          {/* four */}
          <div className="footer-column">
            <h3 className="columnheader">GET IN THE KNOW</h3>
            <Box sx={{ marginTop: 5 }}>
              <TextField
                id="standard-basic"
                label="Enter email"
                variant="standard"
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <Box className="footer">
//       <Box className="footer-container">
//         <Box className="footer-row">
//           <Box className="footer-column">
//             <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
//               COMPANY INFO
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//     <Box sx={{ background: "#FBFBFB" }}>
//       <Container
//         maxWidth={false}
//         sx={{
//           width: "85%",
//           paddingX: 100,
//           paddingY: 0,
//         }}
//       >
//         <Box>
//           <Stack
//             direction="row"
//             justifyContent="space-between"
//             alignItems="flex-start"
//             spacing={4}
//             padding={10}
//           >
//             <Stack
//               direction="column"
//               justifyContent="flex-start"
//               alignItems="flex-start"
//             >
//               <Box>
//                 <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
//                   COMPANY INFO
//                 </Typography>
//               </Box>

//               <Box sx={{ marginTop: 5 }}>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   About Us
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   Latest Posts
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   Contact Us
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   Shop
//                 </Typography>
//               </Box>
//             </Stack>

//             {/* help links */}
//             <Stack
//               direction="column"
//               justifyContent="space-between"
//               alignItems="center"
//             >
//               <Box>
//                 <Typography
//                   sx={{ fontSize: 12, fontWeight: 700, marginLeft: -3 }}
//                 >
//                   HELP LINKS
//                 </Typography>
//               </Box>

//               <Box sx={{ marginTop: 5 }}>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   Tracking
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   Order Status
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   Delivery
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   Shipping Info
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   FAQ
//                 </Typography>
//               </Box>
//             </Stack>
//             <Stack
//               direction="column"
//               justifyContent="space-between"
//               alignItems="center"
//             >
//               <Box>
//                 <Typography
//                   sx={{ fontSize: 12, fontWeight: 700, marginLeft: -3 }}
//                 >
//                   {" "}
//                   USEFUL LINKS
//                 </Typography>
//               </Box>

//               <Box sx={{ marginTop: 5 }}>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   Special Offers
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   Gift Cards
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   Advertising
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//                 >
//                   Terms of Use
//                 </Typography>
//               </Box>
//             </Stack>

//             {/* Get in the know */}
//             <Box>
//               <Box>
//                 <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
//                   {" "}
//                   Get in the Know
//                 </Typography>
//               </Box>

//               <Box sx={{ marginTop: 5 }}>
//                 <TextField
//                   id="standard-basic"
//                   label="Enter email"
//                   variant="standard"
//                 />
//               </Box>
//             </Box>
//           </Stack>
//         </Box>

//         {/* below */}
//         <Box borderTop={0.5}>
//           <Stack
//             direction="row"
//             justifyContent="space-between"
//             alignItems="flex-end"
//             spacing={2}
//           >
//             <Box sx={{ paddingTop: 4 }}>
//               <Typography
//                 sx={{ fontSize: 14, color: "#555555", fontWeight: 400 }}
//               >
//                 ©2020 NorthDtar eCommerce
//               </Typography>
//               <Stack
//                 direction="row"
//                 justifyContent="flex-end"
//                 alignItems="flex-start"
//                 spacing={2}
//               >
//                 <Typography
//                   sx={{ fontSize: 14, color: "#555555", fontWeight: 400 }}
//                 >
//                   Privacy Policy
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: 14, color: "#555555", fontWeight: 400 }}
//                 >
//                   Terms & Conditions
//                 </Typography>
//               </Stack>
//             </Box>
//             <Box>
//               <Stack
//                 direction="row"
//                 justifyContent="flex-start"
//                 alignItems="center"
//                 spacing={2}
//               >
//                 <img src={visa} alt="" />
//                 <img src={MasterCard} alt="" />
//                 <img src={paypal} alt="" />
//                 <img src={visaElectron} alt="" />
//               </Stack>
//             </Box>
//           </Stack>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;
// const Footer = () => {
//   const {
//     palette: { neutral },
//   } = useTheme();

//   return (
//     <Stack
//       direction="row"
//       justifyContent="space-between"
//       marginTop="70px"
//       padding="40px 0"
//       backgroundColor={neutral[100]}
//     >
//       <Box
//         width="80%"
//         margin="auto"
//         display="flex"
//         flexDirection="row"
//         justifyContent="space-between"
//         flexWrap="wrap"
//         rowGap="30px"
//         columnGap="clamp(20px, 30px, 40px)"
//       >
//         <Box>
//           <Box width="clamp(20%, 30%, 40%)">
//             <Typography
//               variant="h4"
//               fontWeight="bold"
//               mb="30px"
//               color={shades.secondary[500]}
//             >
//               COMPANY INFO
//             </Typography>
//             {["About Us", "Latest Posts", "Contact Us", "Shop"].map((text) => (
//               <Typography
//                 key={text}
//                 sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
//               >
//                 {text}
//               </Typography>
//             ))}
//           </Box>

//           <Box>
//             <Typography variant="h4" fontWeight="bold" mb="30px">
//               HELP LINKS
//             </Typography>
//             {[
//               "Tracking",
//               "Order Status",
//               "Delivery",
//               "Shipping Info",
//               "FAQ",
//             ].map((text) => (
//               <Typography key={text} mb="30px">
//                 {text}
//               </Typography>
//             ))}
//           </Box>

//           <Box>
//             <Typography variant="h4" fontWeight="bold" mb="30px">
//               USEFUL LINKS
//             </Typography>
//             {[
//               "Special Offers",
//               "Gift Cards",
//               "Advertising",
//               "Terms of Use",
//             ].map((text) => (
//               <Typography key={text} mb="30px">
//                 {text}
//               </Typography>
//             ))}
//           </Box>

//           <Box>
//             <Typography variant="h4" fontWeight="bold" mb="30px">
//               Get in the Know
//             </Typography>
//             <TextField
//               id="standard-basic"
//               label="Enter email"
//               variant="standard"
//             />
//           </Box>
//         </Box>

//         <Box
//           width="100%"
//           borderTop="1px solid"
//           borderColor={neutral[600]}
//           pt="20px"
//         >
//           <Stack
//             direction="row"
//             justifyContent="space-between"
//             alignItems="center"
//             spacing={2}
//           >
//             <Box>
//               <Typography
//                 sx={{ fontSize: 14, color: neutral[700], fontWeight: 400 }}
//               >
//                 ©2020 NorthStar eCommerce
//               </Typography>
//               <Stack direction="row" spacing={2}>
//                 {["Privacy Policy", "Terms & Conditions"].map((text) => (
//                   <Typography
//                     key={text}
//                     sx={{ fontSize: 14, color: neutral[700], fontWeight: 400 }}
//                   >
//                     {text}
//                   </Typography>
//                 ))}
//               </Stack>
//             </Box>
//             <Stack direction="row" spacing={2}>
//               {[visa, MasterCard, paypal, visaElectron].map((img, index) => (
//                 <img key={index} src={img} alt="Payment Method" />
//               ))}
//             </Stack>
//           </Stack>
//         </Box>
//       </Box>
//     </Stack>
//   );
// };

// export default Footer;

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer-container">
//         <div className="footer-row">
//           {/* one */}
//           <div className="footer-column">
//             <h3 className="columnheader">Company info</h3>
//             <h4 className="columnames">About Us</h4>
//             <h4 className="columnames">Latest Posts</h4>
//             <h4 className="columnames">Contact Us</h4>
//             <h4 className="columnames">Shop</h4>
//           </div>
//           {/* two */}
//           <div className="footer-column">
//             <h3 className="columnheader">HELP LINKS</h3>
//             <h4 className="columnames">Tracking</h4>
//             <h4 className="columnames">Order Status</h4>
//             <h4 className="columnames">Delivery</h4>
//             <h4 className="columnames">Shipping Info</h4>
//             <h4 className="columnames">FAQ</h4>
//           </div>

//           {/* three */}
//           <div className="footer-column">
//             <h3 className="columnheader">USEFUL LINKS</h3>
//             <h4 className="columnames">Special Offers</h4>
//             <h4 className="columnames">Gift Cards</h4>
//             <h4 className="columnames">Advertising</h4>
//             <h4 className="columnames">Terms of Use</h4>
//           </div>

//           {/* four */}
//           <div className="footer-column">
//             <h3 className="columnheader">GET IN THE KNOW</h3>
//             <Box sx={{ marginTop: 5 }}>
//               <TextField
//                 id="standard-basic"
//                 label="Enter email"
//                 variant="standard"
//               />
//             </Box>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
