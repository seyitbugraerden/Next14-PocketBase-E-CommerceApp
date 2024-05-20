import { pb } from "@/lib/pb";

export function getHeaderDataFromServer() {
  return pb.collection("Header").getFullList();
}
