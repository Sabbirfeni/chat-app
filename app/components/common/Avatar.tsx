import Image from "next/image";

interface AvatarProps {
  avatarUrl?: string;
  userName: string;
  className?: string;
}

function Avatar({ avatarUrl, userName, className = "" }: AvatarProps) {
  return (
    <div
      className={`relative flex min-w-8 min-h-8 text-xs flex-col justify-center items-center gap-2.5 rounded-full bg-[#FA8F53] overflow-hidden ${className}`}
    >
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={`${userName}'s avatar`}
          fill
          className="object-cover"
        />
      ) : (
        <span className="text-white text-center font-normal leading-[12px] tracking-[1px] uppercase">
          {userName[0]}
        </span>
      )}
    </div>
  );
}

export default Avatar;
