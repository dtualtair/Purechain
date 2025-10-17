// import {
//   Typography,
//   Box,
//   Card,
//   Container,
//   Button,
//   styled
// } from '@mui/material';
// import BaseLayout from 'src/layouts/BaseLayout';

// import Link from 'src/components/Link';
// import Head from 'next/head';

// import Logo from 'src/components/LogoSign';
// import Hero from 'src/content/Overview/Hero';

// const HeaderWrapper = styled(Card)(
//   ({ theme }) => `
//   width: 100%;
//   display: flex;
//   align-items: center;
//   height: ${theme.spacing(10)};
//   margin-bottom: ${theme.spacing(10)};
// `
// );

// const OverviewWrapper = styled(Box)(
//   ({ theme }) => `
//     overflow: auto;
//     background: ${theme.palette.common.white};
//     flex: 1;
//     overflow-x: hidden;
// `
// );

// function Overview() {
//   return (
//     <OverviewWrapper>
//       <Head>
//         <title>Tokyo Free White NextJS Javascript Admin Dashboard</title>
//       </Head>
//       <HeaderWrapper>
//         <Container maxWidth="lg">
//           <Box display="flex" alignItems="center">
//             <Logo />
//             <Box
//               display="flex"
//               alignItems="center"
//               justifyContent="space-between"
//               flex={1}
//             >
//               <Box />
//               <Box>
//                 <Button
//                   component={Link}
//                   href="/dashboards/crypto"
//                   variant="contained"
//                   sx={{ ml: 2 }}
//                 >
//                   Live Preview
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Container>
//       </HeaderWrapper>
//       <Hero />
//       <Container maxWidth="lg" sx={{ mt: 8 }}>
//         <Typography textAlign="center" variant="subtitle1">
//           Crafted by{' '}
//           <Link
//             href="https://bloomui.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             BloomUI.com
//           </Link>
//         </Typography>
//       </Container>
//     </OverviewWrapper>
//   );
// }

// export default Overview;

// Overview.getLayout = function getLayout(page) {
//   return <BaseLayout>{page}</BaseLayout>;
// };




//================================================================================================================================


// import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
// import { useWeb3 } from "@3rdweb/hooks"
// import { MoralisProvider, useMoralis, isAuthenticated } from "react-moralis";
// import "regenerator-runtime/runtime";
// import { useState, useEffect } from "react";
// import Router from "next/router";
// function Overview({ }) {
//   const [page, setpage] = useState(<button
//     onClick={() => {
//       authenticate({ provider: "metamask" });
//     }}
//   >
//     Sign in with MetaMask
//   </button>)
//   const { authenticate, isAuthenticated, logout, user } = useMoralis();

//   useEffect(() => {
//     if (isAuthenticated()) {
//       setpage(<h2>Your wallet address is {user.get("ethAddress")}</h2>)
//       //redirect to dashboard
//       Router.push("/dashboard/crypto");
//     }}, [isAuthenticated()]);

//         return (
//           {page}
//           );

// }

// export default Overview;

import React from 'react'
import { useMoralis } from "react-moralis";
export default function Overview() {
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  return (
    <div>

      {isAuthenticated ? (
        //redirect to dashboard
        <meta httpEquiv='refresh' content='0; url=/dashboards/crypto' />

      ) : (
        <button
          onClick={() => {
            authenticate({ provider: "metamask" });
          }}
        >
          Sign in with MetaMask
        </button>
      )}
    </div>
  );
}

