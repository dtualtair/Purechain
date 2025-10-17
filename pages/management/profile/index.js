import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import Footer from 'src/components/Footer';
import Wallets from 'src/content/Dashboards/Crypto/Wallets';
import { Grid, Container, styled } from '@mui/material';

import ProfileCover from 'src/content/Management/Users/details/ProfileCover';
import RecentActivity from 'src/content/Management/Users/details/RecentActivity';
import Feed from 'src/content/Management/Users/details/Feed';
import PopularTags from 'src/content/Management/Users/details/PopularTags';
import MyCards from 'src/content/Management/Users/details/MyCards';
import Addresses from 'src/content/Management/Users/details/Addresses';

function ManagementUserProfile() {
  const user = {
    savedCards: 7,
    name: 'Aarush Mahajan',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue urna ac nisl pharetra, quis rhoncus tellus lacinia. In rutrum erat id massa ornare, sit amet consectetur eros viverra. Suspendisse eu erat est. Aliquam hendrerit, risus a interdum suscipit, felis risus sagittis turpis, non eleifend arcu enim efficitur turpis. Donec ac posuere felis",
    jobtitle: 'Merchant',
    location: 'New Delhi, India',
  };
  const CardAddAction = styled(Wallets)(
    ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        box-shadow: none;
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[100]};
        }
`
  );

  return (
    <>
      <Head>
        <title>User Details </title>
      </Head>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>
          
          {/* <Grid item xs={12} md={7}>
            <MyCards />
          </Grid> */}
          <Grid item xs={12} md={10}>
            <Wallets />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ManagementUserProfile.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ManagementUserProfile;
