# Virginia Beach Polling Locations

This project provides users with a streamlined and responsive interface to find polling locations in Virginia Beach, created in anticipation of the upcoming elections. Utilizing Google Maps, I displayed polling locations so users can easily pinpoint where to vote. Built with a mobile-first approach, the app is accessible on any device, ensuring a consistent experience across phones, tablets, and desktops.

## Features

- **Google Maps Integration**: Polling locations are displayed directly on Google Maps, offering users a clear view of all available locations. Clicking on a marker reveals detailed information about the polling site.
- **Mobile-First Design**: The app is optimized for mobile users, allowing easy navigation and access regardless of the device being used.
- **Continuous Deployment**: The project uses a CI/CD pipeline via GitHub Actions, automatically deploying changes to AWS. This ensures that every update is promptly live.
- **AWS Deployment**: The app is hosted on AWS, using an S3 bucket to store build files and CloudFront for fast and reliable content delivery.

## Future Enhancements

With more time, I would include the following additional features:

- **Database Integration**: Store polling location data in a database to manage and scale the data more efficiently.
- **Admin Tool**: Build an administrative dashboard for city officials to add, update, or remove polling locations.
- **Search Functionality**: Implement a search feature that allows users to quickly find their desired polling location without scrolling through the list.
- **Improved Styling**: Enhance the app’s CSS for a more polished and professional look, elevating the user experience.
- **AWS Lambda Backend**: Set up AWS Lambda as a backend service to dynamically handle requests, improving scalability, performance, and cost-effectiveness.

## Deployment Details

This project is deployed to AWS with the following steps:

1. **CI/CD Pipeline**: GitHub Actions automates the deployment process, ensuring any push to the main branch deploys the latest version of the app to AWS.
2. **S3 Bucket**: The app’s build files are stored in an S3 bucket.
3. **CloudFront**: AWS CloudFront is used for content delivery, ensuring low latency and high availability for users.
4. **Environment Variables**: API keys and other sensitive data are managed through environment variables to ensure secure and proper configuration.

## Live Application

You can view the live application here: [Polling Locations App](https://d12x3uvpe6slnc.cloudfront.net/)

## Running Locally

To run the application locally, follow these steps:

```bash
# Clone the repository
git clone git@github.com:raboomar/VA_Polling_Locations.git

# Change directory into the project folder
cd web-polling-locations

# Install dependencies
npm install

# Start the development server
npm start
```
