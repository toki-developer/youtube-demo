import { AppBar, Avatar, IconButton, Toolbar, Typography, } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { useUserByIdQuery } from "../../utils/graphql/generated";
import { SearchBar } from "./SearchBar";


// export defaultしているので、import側でuseStylesと命名します。
// 命名はなんでも構いませんが、一貫して全て同じ名前にすることで、カスタム用のCSSを使用していることを明示します。
import useStyles from "./style";

export const DashboardHeader = () => {
  // 一度、useStylesを実行して、CSSを生成します。
  const styles = useStyles();

  const { data } = useUserByIdQuery({
    variables: { id: "id1" },
  });
  console.log(data)
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
          <IconButton>
            <Typography>{data?.users_by_pk?.name}</Typography>
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton className={styles.profileIcon}>
            <Avatar />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};