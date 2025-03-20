import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { serveAsset } from "./assets";

export async function registerRoutes(app: Express): Promise<Server> {
  // Assets route to serve videos, images, etc.
  app.get("/api/assets/:filename", serveAsset);

  // API routes for future functionality
  app.get("/api/events", (req: Request, res: Response) => {
    const events = [
      {
        id: 1,
        title: "African Regional Qualifiers",
        dates: "May 15-18, 2024",
        location: "Lagos, Nigeria",
        description: "Preliminary competitions to select top debaters from across the African continent for The Grand Orate."
      },
      {
        id: 2,
        title: "The Grand Orate",
        dates: "June 25-30, 2024",
        location: "Nairobi, Kenya",
        description: "Our flagship international competition bringing together the world's top debaters to compete for prestigious awards."
      },
      {
        id: 3,
        title: "Virtual Masterclass Series",
        dates: "July-August 2024",
        location: "Online",
        description: "A series of workshops led by world-renowned debaters and public speakers, focusing on advanced oratory techniques."
      }
    ];
    
    res.json(events);
  });

  app.get("/api/values", (req: Request, res: Response) => {
    const values = [
      {
        id: 1,
        number: "01",
        title: "Excellence",
        description: "We strive for excellence in all aspects of oratory and debate, pushing boundaries and setting new standards."
      },
      {
        id: 2,
        number: "02",
        title: "Inclusivity",
        description: "Creating opportunities for diverse voices to be heard and recognized in the global debate community."
      },
      {
        id: 3,
        number: "03",
        title: "Innovation",
        description: "Embracing new ideas and approaches to evolve the art of debate and public speaking."
      },
      {
        id: 4,
        number: "04",
        title: "Education",
        description: "Fostering continuous learning and skill development through quality resources and mentorship."
      },
      {
        id: 5,
        number: "05",
        title: "Global Networking",
        description: "Building connections across borders to create a worldwide community of speakers and debaters."
      },
      {
        id: 6,
        number: "06",
        title: "Impact",
        description: "Using oratory as a tool for positive change, addressing real-world challenges through the power of speech."
      }
    ];
    
    res.json(values);
  });

  app.get("/api/regions", (req: Request, res: Response) => {
    const regions = [
      {
        id: "africa",
        title: "Africa",
        description: "Expanding engagement across Eastern and Western African nations.",
        featuredCountries: "Nigeria, Kenya, Ghana, South Africa, Rwanda",
        image: "https://images.unsplash.com/photo-1504198453481-3d3d9e89d213"
      },
      {
        id: "europe",
        title: "Europe",
        description: "Partnerships with leading academic institutions and debate societies.",
        featuredCountries: "UK, France, Germany, Spain, Netherlands",
        image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e"
      },
      {
        id: "northAmerica",
        title: "North America",
        description: "Strong presence in university-level competitions and professional circles.",
        featuredCountries: "USA, Canada, Mexico",
        image: "https://images.unsplash.com/photo-1534655378222-9a8e5c904bb0"
      },
      {
        id: "asia",
        title: "Asia",
        description: "Growing influence in emerging debate markets across the continent.",
        featuredCountries: "Japan, Singapore, India, UAE, Philippines",
        image: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f"
      }
    ];
    
    res.json(regions);
  });

  const httpServer = createServer(app);

  return httpServer;
}
