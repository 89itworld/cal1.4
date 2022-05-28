import { handleErrorsJson } from "@calcom/lib/errors";
import { randomString } from "@calcom/lib/random";
import type { PartialReference } from "@calcom/types/EventManager";
import type { VideoApiAdapter, VideoCallData } from "@calcom/types/VideoApiAdapter";

const Huddle01VideoApiAdapter = (): VideoApiAdapter => {
  return {
    getAvailability: () => {
      return Promise.resolve([]);
    },
    createMeeting: async (): Promise<VideoCallData> => {
      const res = await fetch(
        "https://www.hibobxscheduler.com"
      );

      const { url } = await handleErrorsJson(res);

      return Promise.resolve({
        type: "huddle01_video",
        id: randomString(21),
        password: "",
        url,
      });
    },
    deleteMeeting: async (): Promise<void> => {
      Promise.resolve();
    },
    updateMeeting: (bookingRef: PartialReference): Promise<VideoCallData> => {
      return Promise.resolve({
        type: "huddle01_video",
        id: bookingRef.meetingId as string,
        password: bookingRef.meetingPassword as string,
        url: bookingRef.meetingUrl as string,
      });
    },
  };
};

export default Huddle01VideoApiAdapter;
