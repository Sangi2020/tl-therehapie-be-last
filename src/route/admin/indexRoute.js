import express from 'express'
import authRoutes from './authRoute.js'
import statRoutes from './statRoute.js'
import UserRoutes from './userRoute.js'
import blogRoutes from './blogRoute.js'
import OrganizationDetailsRoutes from './organizationDetailsRoute.js'
import socialRoutes from "./socialRoute.js";
import seoRoutes from "./seoRoute.js"
import emailConfigRoutes from "./emailConfigRoute.js"
import faqRoutes from "./faqRoute.js"
import testimonialRoutes from "./testimonialRoute.js"
import documentRoutes from "./documentRoutes.js"
import enquiriesRoutes from "./enquiriesRoute.js"
import notificationRoutes from "./notificationRoute.js"
import newsletterRoutes from "./newsletterRoute.js"
import serviceRoute from './serviceRoute.js'
const router = express.Router();



router.use("/auth", authRoutes);
router.use("/stats", statRoutes);
router.use("/users", UserRoutes);
router.use("/organization", OrganizationDetailsRoutes);
router.use("/blog", blogRoutes);
router.use('/social', socialRoutes);
router.use("/seo",seoRoutes)
router.use('/config', emailConfigRoutes);
router.use("/qna", faqRoutes);
router.use("/contents", testimonialRoutes);
router.use("/enquiries", enquiriesRoutes);
router.use('/notification', notificationRoutes);
router.use("/newsletter", newsletterRoutes);
router.use('/document', documentRoutes)
router.use('/service', serviceRoute)







export default router