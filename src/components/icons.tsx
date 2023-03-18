import { cn } from "@/lib/utils"
import {
  Laptop,
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  twitter: Twitter,
  logo: ({className, ...props}: LucideProps) => (
    <svg viewBox="0 0 154 70" className={cn('fill-dark-900', className)} {...props}>
      <path
        d="M13.1532 41.7742C10.6317 41.7742 8.22312 41.3602 5.92742 40.5323C3.63172 39.7043 1.65591 38.4812 0 36.8629L2.70968 31.9516C4.4785 33.3817 6.20968 34.4355 7.90323 35.1129C9.63441 35.7903 11.2903 36.129 12.871 36.129C14.3387 36.129 15.5054 35.8656 16.371 35.3387C17.2742 34.8118 17.7258 34.0215 17.7258 32.9677C17.7258 32.2527 17.4812 31.707 16.9919 31.3306C16.5027 30.9167 15.7876 30.5591 14.8468 30.2581C13.9436 29.957 12.8333 29.6183 11.5161 29.2419C9.33333 28.5269 7.50807 27.8306 6.04032 27.1532C4.57258 26.4758 3.46237 25.629 2.70968 24.6129C1.99462 23.5591 1.6371 22.2231 1.6371 20.6048C1.6371 18.6479 2.12634 16.9731 3.10484 15.5806C4.12097 14.1505 5.51344 13.0403 7.28226 12.25C9.08871 11.4597 11.1962 11.0645 13.6048 11.0645C15.7124 11.0645 17.707 11.4032 19.5887 12.0806C21.4704 12.7204 23.1828 13.7742 24.7258 15.2419L21.6774 20.0403C20.172 18.8737 18.7419 18.0269 17.3871 17.5C16.0323 16.9355 14.6586 16.6532 13.2661 16.6532C12.4758 16.6532 11.7231 16.7473 11.0081 16.9355C10.3306 17.1237 9.76613 17.4436 9.31452 17.8952C8.90054 18.3091 8.69355 18.9113 8.69355 19.7016C8.69355 20.4167 8.88172 20.9812 9.25807 21.3952C9.67204 21.7715 10.2742 22.1102 11.0645 22.4113C11.8925 22.7124 12.8898 23.0511 14.0565 23.4274C16.4274 24.1048 18.422 24.8011 20.0403 25.5161C21.6962 26.2312 22.9382 27.1156 23.7661 28.1694C24.5941 29.1855 25.0081 30.5968 25.0081 32.4032C25.0081 35.3387 23.9355 37.6344 21.7903 39.2903C19.6452 40.9462 16.7661 41.7742 13.1532 41.7742Z"
        fill="#FF6161"
      />
      <path
        d="M55.387 41.2097H47.8225V24.6129C47.8225 22.3172 47.3708 20.6048 46.4676 19.4758C45.602 18.3468 44.3977 17.7823 42.8547 17.7823C41.9515 17.7823 40.9918 18.0457 39.9757 18.5726C38.9596 19.0995 38.0375 19.8333 37.2096 20.7742C36.4192 21.6774 35.8359 22.7312 35.4596 23.9355V41.2097H27.895V0H35.4596V17.1048C36.551 15.2231 38.0375 13.7554 39.9192 12.7016C41.801 11.6479 43.852 11.121 46.0725 11.121C47.9918 11.121 49.5536 11.4597 50.7579 12.1371C51.9622 12.7769 52.9031 13.6613 53.5805 14.7903C54.2579 15.8817 54.7284 17.1237 54.9918 18.5161C55.2553 19.871 55.387 21.2823 55.387 22.75V41.2097Z"
        fill="#FF6161"
      />
      <path
        d="M73.3677 41.7742C70.9591 41.7742 68.7951 41.379 66.8758 40.5887C64.9564 39.7608 63.3193 38.6317 61.9645 37.2016C60.6473 35.7715 59.6311 34.1344 58.9161 32.2903C58.201 30.4462 57.8435 28.5081 57.8435 26.4758C57.8435 24.4059 58.201 22.4489 58.9161 20.6048C59.6311 18.7608 60.6473 17.1237 61.9645 15.6936C63.3193 14.2634 64.9564 13.1532 66.8758 12.3629C68.7951 11.5349 70.9591 11.121 73.3677 11.121C75.7763 11.121 77.9215 11.5349 79.8032 12.3629C81.7225 13.1532 83.3596 14.2634 84.7145 15.6936C86.0693 17.1237 87.0854 18.7608 87.7629 20.6048C88.4779 22.4489 88.8354 24.4059 88.8354 26.4758C88.8354 28.5081 88.4779 30.4462 87.7629 32.2903C87.0854 34.1344 86.0693 35.7715 84.7145 37.2016C83.3973 38.6317 81.779 39.7608 79.8596 40.5887C77.9403 41.379 75.7763 41.7742 73.3677 41.7742ZM65.6338 26.4758C65.6338 28.207 65.9725 29.75 66.65 31.1048C67.3274 32.422 68.2494 33.457 69.4161 34.2097C70.5827 34.9624 71.8999 35.3387 73.3677 35.3387C74.7978 35.3387 76.0962 34.9624 77.2629 34.2097C78.4295 33.4194 79.3516 32.3656 80.029 31.0484C80.744 29.6936 81.1016 28.1505 81.1016 26.4194C81.1016 24.7258 80.744 23.2016 80.029 21.8468C79.3516 20.4919 78.4295 19.4382 77.2629 18.6855C76.0962 17.9328 74.7978 17.5565 73.3677 17.5565C71.8999 17.5565 70.5827 17.9516 69.4161 18.7419C68.2494 19.4946 67.3274 20.5484 66.65 21.9032C65.9725 23.2204 65.6338 24.7446 65.6338 26.4758Z"
        fill="#FF6161"
      />
      <path
        d="M127.384 11.629H134.554L122.191 41.2097H115.868L110.901 28.5081L106.046 41.2097H99.6667L87.3602 11.629H94.4731L103.28 33.9839L106.723 24.3306L101.586 11.6855H107.852L110.901 20.7177L114.005 11.6855H120.272L115.134 24.3306L118.634 33.9839L127.384 11.629Z"
        fill="#FF6161"
      />
      <path
        d="M48.2097 69.4355H40.6452V52.8387C40.6452 50.5054 40.2312 48.793 39.4032 47.7016C38.6129 46.5726 37.5027 46.0081 36.0726 46.0081C34.6048 46.0081 33.1935 46.5914 31.8387 47.7581C30.5215 48.8871 29.5806 50.3736 29.0161 52.2177V69.4355H21.4516V52.8387C21.4516 50.4677 21.0376 48.7365 20.2097 47.6452C19.4193 46.5538 18.3091 46.0081 16.879 46.0081C15.4113 46.0081 14 46.5726 12.6452 47.7016C11.328 48.8306 10.3871 50.3172 9.82257 52.1613V69.4355H2.25806V39.8548H9.0887V45.3306C10.2177 43.4113 11.7231 41.9435 13.6048 40.9274C15.4866 39.8736 17.6505 39.3468 20.0968 39.3468C22.543 39.3468 24.4435 39.9489 25.7984 41.1532C27.1909 42.3575 28.0753 43.8441 28.4516 45.6129C29.6559 43.5806 31.1801 42.0376 33.0242 40.9839C34.9059 39.8925 37.0134 39.3468 39.3468 39.3468C41.1909 39.3468 42.6774 39.6855 43.8064 40.3629C44.9731 41.0027 45.8763 41.8871 46.5161 43.0161C47.1559 44.1075 47.5887 45.3495 47.8145 46.7419C48.078 48.1344 48.2097 49.5457 48.2097 50.9758V69.4355Z"
        className="dark:fill-white"
      />
      <path
        d="M66.1988 70C63.7902 70 61.6262 69.6048 59.7068 68.8145C57.7875 67.9866 56.1504 66.8575 54.7955 65.4274C53.4783 63.9973 52.4622 62.3602 51.7472 60.5161C51.0321 58.672 50.6746 56.7339 50.6746 54.7016C50.6746 52.6317 51.0321 50.6747 51.7472 48.8306C52.4622 46.9866 53.4783 45.3495 54.7955 43.9193C56.1504 42.4892 57.7875 41.379 59.7068 40.5887C61.6262 39.7607 63.7902 39.3468 66.1988 39.3468C68.6074 39.3468 70.7525 39.7607 72.6343 40.5887C74.5536 41.379 76.1907 42.4892 77.5455 43.9193C78.9004 45.3495 79.9165 46.9866 80.5939 48.8306C81.309 50.6747 81.6665 52.6317 81.6665 54.7016C81.6665 56.7339 81.309 58.672 80.5939 60.5161C79.9165 62.3602 78.9004 63.9973 77.5455 65.4274C76.2283 66.8575 74.6101 67.9866 72.6907 68.8145C70.7714 69.6048 68.6074 70 66.1988 70ZM58.4649 54.7016C58.4649 56.4328 58.8036 57.9758 59.481 59.3306C60.1585 60.6478 61.0805 61.6828 62.2472 62.4355C63.4138 63.1882 64.731 63.5645 66.1988 63.5645C67.6289 63.5645 68.9273 63.1882 70.0939 62.4355C71.2606 61.6452 72.1826 60.5914 72.8601 59.2742C73.5751 57.9193 73.9326 56.3763 73.9326 54.6452C73.9326 52.9516 73.5751 51.4274 72.8601 50.0726C72.1826 48.7177 71.2606 47.664 70.0939 46.9113C68.9273 46.1586 67.6289 45.7822 66.1988 45.7822C64.731 45.7822 63.4138 46.1774 62.2472 46.9677C61.0805 47.7204 60.1585 48.7742 59.481 50.129C58.8036 51.4462 58.4649 52.9704 58.4649 54.7016Z"
        className="dark:fill-white"
      />
      <path
        d="M91.4816 69.4355L80.5864 39.8548H88.4332L95.8848 62.5484L103.393 39.8548H110.562L99.7235 69.4355H91.4816Z"
        className="dark:fill-white"
      />
      <path
        d="M112.301 69.4355V39.8548H119.866V69.4355H112.301ZM112.301 35.7339V28.2258H119.866V35.7339H112.301Z"
        className="dark:fill-white"
      />
      <path
        d="M138.149 70C135.778 70 133.633 69.6048 131.714 68.8145C129.795 67.9866 128.158 66.8763 126.803 65.4839C125.448 64.0538 124.394 62.4355 123.641 60.629C122.926 58.7849 122.569 56.8468 122.569 54.8145C122.569 51.9919 123.19 49.414 124.432 47.0806C125.711 44.7473 127.518 42.8844 129.851 41.4919C132.222 40.0618 135.007 39.3468 138.206 39.3468C141.442 39.3468 144.209 40.0618 146.504 41.4919C148.8 42.8844 150.55 44.7473 151.754 47.0806C152.996 49.3763 153.617 51.8602 153.617 54.5323C153.617 54.9839 153.598 55.4543 153.561 55.9435C153.523 56.3952 153.485 56.7715 153.448 57.0726H130.585C130.735 58.578 131.168 59.8952 131.883 61.0242C132.636 62.1532 133.577 63.0188 134.706 63.621C135.873 64.1855 137.114 64.4677 138.432 64.4677C139.937 64.4677 141.348 64.1102 142.666 63.3952C144.02 62.6425 144.942 61.664 145.432 60.4597L151.924 62.2661C151.209 63.7715 150.174 65.1075 148.819 66.2742C147.502 67.4409 145.94 68.3629 144.133 69.0403C142.327 69.6801 140.332 70 138.149 70ZM130.416 52.2742H145.883C145.733 50.7688 145.3 49.4704 144.585 48.379C143.908 47.25 143.004 46.3844 141.875 45.7822C140.746 45.1425 139.485 44.8226 138.093 44.8226C136.738 44.8226 135.496 45.1425 134.367 45.7822C133.276 46.3844 132.373 47.25 131.658 48.379C130.98 49.4704 130.566 50.7688 130.416 52.2742Z"
        className="dark:fill-white"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
}