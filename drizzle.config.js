/** @type { import("drizzle-kit").Config} */
export default{
    schema:"./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:DR5LrnzZ6oFe@ep-patient-glade-a5fv3zcd.us-east-2.aws.neon.tech/car_Market?sslmode=require'
    }
}