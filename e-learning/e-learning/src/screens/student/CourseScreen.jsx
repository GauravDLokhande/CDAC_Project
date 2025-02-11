import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

const CourseScreen = () => {
  return (
    <div className="min-h-screen bg-[#f4eeff] flex flex-col">
      {/* Header */}
      <header className="bg-[#424874] text-white py-4 text-center text-2xl font-bold">
        Course Name
      </header>

      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 p-4">
          <Card className="mb-4 shadow-lg">
            <CardContent className="bg-[#dcd6f7] rounded-xl p-4">
              <Typography variant="h6" className="text-center font-semibold">
                Video Content
              </Typography>
            </CardContent>
          </Card>

          <Card className="mb-4 shadow-md">
            <CardContent className="bg-[#a6b1e1] rounded-md p-3">
              <Typography variant="subtitle1" className="font-medium">
                Course Overview
              </Typography>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="bg-[#a6b1e1] rounded-md p-3">
              <Typography variant="subtitle1" className="font-medium">
                Discussion
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="w-1/4 bg-[#dcd6f7] p-4 shadow-lg">
          <Button
            variant="contained"
            className="w-full mb-4 bg-[#424874] text-white hover:bg-[#a6b1e1]"
          >
            Add Content
          </Button>

          <Card className="shadow-md">
            <CardContent className="bg-[#a6b1e1] rounded-md p-4">
              <Typography variant="subtitle1" className="font-medium text-center">
                Content Library
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default  CourseScreen;
