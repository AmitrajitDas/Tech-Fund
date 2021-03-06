import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMoralis } from 'react-moralis'
import {
  TextField,
  Button,
  Grid,
  useMediaQuery,
  Paper,
  Typography,
} from '@mui/material'

// layout for page
import { useLogin } from '../../utils/loginMoralis'
import { useStyles } from '../../styles/auth.style'
import Link from 'next/link'
import AuthNavLogo from "../../public/assets/AuthNavLogo.png";


export default function Login() {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:600px)')
  const { register, handleSubmit } = useForm()
  const { login, isAuthenticated, authError, userError, user } = useMoralis()

  const router = useRouter()

  const OnSubmit = (data) => {
    console.log({ ...data })
    useLogin({
      ...data,
      login,
      isAuthenticated,
      authError,
      userError,
    })
  }

  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem("user", JSON.stringify({ isAuthenticated: isAuthenticated }))
      router.push(`/dashboard/${user.get('userType')}`)
    }

    // Auth Error Handler
    if (authError) {
      alert(authError.message)
    }

    if (userError) {
      alert(userError.message);
    }
  }, [isAuthenticated, user, router, authError, userError])


  // Back to Previous page
  const backToPrevPage = () => {
    router.back()
  }

  return (
    <>
      <Grid container spacing={'14'} component='main' className={classes.root}>
        <Grid item xs={false} sm={false} md={6}>
          <Image
            src='/assets/desktop/LoginImg.png'
            alt='vector'
            width={1000}
            height={1100}
            className={isMobile ? classes.display : classes.image}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={0}>
          <Grid container >
            <Grid item sm={6}>
              <div className={classes.navLogo}>
                <Link href="/">
                  <Image width='100' height={'20'} src={AuthNavLogo} alt="Logo" />
                </Link>
              </div>

            </Grid>
            <Grid item sm={6} >
              <Typography onClick={backToPrevPage} component="h1" className={classes.backBtn}>
                Back
              </Typography>

            </Grid>
          </Grid>

          <div className={classes.paper}>
            <Typography component="h1" sx={{ textAlign: "left", fontSize: "44px" }} variant="heading">
              Hey there!
            </Typography>
            <Typography component="h3" style={{ marginBottom: "2rem", fontWeight: "500" }} variant="description" >
              Hop on to the world of future and get started with contributing or innovating.
            </Typography>
            <form onSubmit={handleSubmit(OnSubmit)}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                {...register('email')}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                {...register('password')}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}

              >
                Login
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href='/signup' variant='body2'>
                    Not Registered Yet? Register instead
                  </Link>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export async function getServerSideProps(context) {
  // const providers = await getProviders();
  return {
    props: { providers: {} },
  }
}
