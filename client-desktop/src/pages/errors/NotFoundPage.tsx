import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <div className="text-2xl">Not Found</div>
      <div className="mb-4 opacity-50">
        The page you are looking for does not exist
      </div>
    </div>
  );
};

export default NotFoundPage;
