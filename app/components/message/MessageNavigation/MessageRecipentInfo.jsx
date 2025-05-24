import Avatar from "../../common/Avatar";

function MessageRecipentInfo() {
  return (
    <div className="flex items-center gap-1 flex-[1_0_0%]">
      <div className="flex items-center gap-2 rounded-lg bg-white">
        <Avatar userName="Jacob" />
        <div className="flex items-center gap-0.5">
          <h2 className="text-[#232F40] text-[18px] font-medium leading-[26px]">
            Jacob Jones
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MessageRecipentInfo;
