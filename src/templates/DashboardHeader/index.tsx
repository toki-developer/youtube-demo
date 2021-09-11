import { AppBar, Avatar, Button, IconButton, Toolbar, Typography, } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { useUserByIdQuery } from "../../utils/graphql/generated";
import { SearchBar } from "./SearchBar";

import { useRecoilValue } from "recoil";
import { GlobalUser } from "../../stores/User";

import useStyles from "./style";

export const DashboardHeader = () => {
  // 一度、useStylesを実行して、CSSを生成します。
  const styles = useStyles();

  const globalUser = useRecoilValue(GlobalUser);

  return (
    <AppBar elevation={0} color="inherit">
      <Toolbar className={styles.between}>
        <div className={styles.flex}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>
        </div>
        <SearchBar />
        <div className={styles.flex}>
        {globalUser ? (
            <>
              <IconButton>
                <VideoCallIcon />
              </IconButton>
              <IconButton className={styles.profileIcon}>
                <Avatar />
              </IconButton>
            </>
          ) : (
            <Button variant="outlined" color="primary" href="/login">
              ログイン
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};