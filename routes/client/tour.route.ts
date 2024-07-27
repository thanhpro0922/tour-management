import { Router, Request, Response } from "express";
import Tour from "../../models/tour.model";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
    const tours = await Tour.findAll({
        raw: true /*Tránh trả ra mấy key linh tinh*/,
    });

    res.render("client/pages/tours/index.pug", {
        tours: tours,
    });
});

export const tourRoutes: Router = router;
