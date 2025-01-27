import React, { useState } from "react";

export default function WritePostInterface() {
  const [aiOptionsVisible, setAiOptionsVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-start p-4">
      <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0">
        <button className="bg-blue-400 text-white py-2 px-4 rounded-full w-full mb-4 text-[17px] font-bold">
          Write Post
        </button>
        <ul className="space-y-4 text-gray-700">
          {[
            { icon: "post_add", label: "Post Generator" },
            { icon: "lightbulb", label: "Ideas Generator" },
            { icon: "view_carousel", label: "Carousel Maker" },
            { icon: "article", label: "Posts" },
            { icon: "insights", label: "Content Inspiration" },
            { icon: "bookmark", label: "Posts for You" },
            { icon: "schedule", label: "Schedule" },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 cursor-pointer hover:text-blue-500"
            >
              <span className="material-icons text-gray-500">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <h4 className="text-gray-700 font-medium mb-2">Preferences</h4>
          <h4 className="text-gray-700 font-medium mb-4">Feature Request</h4>

          <div className="text-gray-500 text-sm">Words generated</div>
          <div className="text-gray-700 font-semibold">1.25k / 50k</div>
          <div className="bg-gray-300 rounded-full h-2 mt-2">
            <div className="bg-blue-500 h-2 rounded-full w-1/4"></div>
          </div>
          <button className="mt-4 bg-white py-1 px-3 text-sm rounded-lg border border-gray-300">
            Upgrade Plan
          </button>
        </div>
      </div>

      <div className="w-full md:w-3/4 p-4 flex flex-col md:flex-row">
        <div className="flex-1 md:mr-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[28px] font-semibold">Write Post</h2>
            <button className="flex items-center space-x-2 text-gray-700 border border-gray-400 py-1 px-2 rounded-full">
              <span className="material-icons">analytics</span>
              <span>Check Score</span>
            </button>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50 relative">
            <textarea
              className="w-full h-32 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your post here..."
            ></textarea>
            <div className="mt-4 flex justify-between items-center">
              <button
                className="flex items-center space-x-2 text-blue-500 relative"
                onClick={() => setAiOptionsVisible(!aiOptionsVisible)}
              >
                <span className="material-icons">magic</span>
                <span>AI Options</span>
              </button>

              {aiOptionsVisible && (
                <div className="absolute top-20 left-0 bg-white border shadow-lg rounded-lg z-10 w-52">
                  <ul className="p-2 text-gray-700 space-y-2">
                    {["Complete", "Shorten", "Extend", "Rephrase", "Summarize", "Simplify", "Emoji-fy", "Tone of Voice", "Translate"].map(
                      (option, index) => (
                        <li
                          key={index}
                          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                        >
                          {option}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              <button className="bg-blue-300 text-white py-2 px-4 rounded-[45px]">
                Publish
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-6 md:mt-0">
          <div className="border rounded-lg p-4 bg-white">
            <h2 className="text-lg font-semibold">Post Preview</h2>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <img
                  src="images/profile.png"
                  alt="Profile"
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Cody Fisher</h3>
                  <p className="text-sm text-gray-500">UI/UX Design | Web Developer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Content creation is important for digital marketing as it involves creating and sharing various types of content to attract and engage the target audience, improve SEO, and drive traffic and conversions.
              </p>
              <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                {[
                  { icon: "thumb_up", label: "Like" },
                  { icon: "comment", label: "Comment" },
                  { icon: "share", label: "Share" },
                  { icon: "send", label: "Send" },
                ].map((action, index) => (
                  <button key={index} className="flex items-center space-x-1">
                    <span className="material-icons">{action.icon}</span>
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


