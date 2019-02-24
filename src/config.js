const dev = {
  STRIPE_KEY: "pk_test_g8a1seEN0IRo9exOvmVRiCvP",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-17o3qkfjj70b0"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://api.fitlogs.fit/dev"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_c44o0XEbI",
    APP_CLIENT_ID: "5228tmjdo4o5e0rkgaq8i0nk69",
    IDENTITY_POOL_ID: "ap-southeast-1:6296762e-4d9f-441f-9f26-de508cfde6aa"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_g8a1seEN0IRo9exOvmVRiCvP",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-8xju2tgvichz"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://api.fitlogs.fit/prod"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_yVVf1J0zR",
    APP_CLIENT_ID: "7u7ja96josunv3oikcflcuhk1h",
    IDENTITY_POOL_ID: "ap-southeast-1:98d91eae-cb18-456b-92fd-c899df03af48"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};