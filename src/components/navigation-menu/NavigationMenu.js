import LogoNavigationMenu from '../../assets/images/logo-navigation-menu.png'
import IconEditProfiles from '../../assets/icons/icon-edit-profiles.svg'
import IconDashboard from '../../assets/icons/icon-dashboard.svg'
import IconApprovals from '../../assets/icons/icon-approvals.svg'
import IconMyclients from '../../assets/icons/icon-my-clients.svg'
import IconBurger from '../../assets/icons/icon-burger.svg'
import Avatar from '../../assets/images/avatar.png'

function NavigationMenu () {
  return (
    <div className="h-screen bg-[#8F8E8E] min-[1224px]:w-[295px] w-screen shadow-md text-white">
      <div className="bg-[#B8DCFF] py-[22px] pl-[23px] w-full flex justify-between h-[65px]">
        <img src={ LogoNavigationMenu } alt="" />
        <div className="mr-7 min-[1224px]:hidden block cursor-pointer">
          <img src={ IconBurger } alt="" />
        </div>
      </div>
      <div className="mt-[59px] ml-[25px]">
        <img src={ Avatar } alt="" />
      </div>
      <div className="mt-[12px] ml-[29px]">
        <p className="text-[16px] font-[700]"> Radhika Dhawan Puri </p>
        <p className="text-[14px] font-[400]"> Senior Client Services </p>
      </div>
      <div className="px-[29px] mt-[29px]">
        <hr></hr>
      </div>
      <div className="mt-[29px] ml-[29px]">
        <p className="text-[11px] font-[400]"> NAVIGATION </p>
        <div className="flex mt-[12px] cursor-pointer">
          <img src={ IconDashboard } alt='' />
          <p className="text-[#1E67AF] text-[16px] font-[700] ml-[12px]"> Dashboard </p>
        </div>
        <div className="flex mt-[10px] cursor-pointer">
          <img src={ IconApprovals } alt='' />
          <p className="text-[16px] font-[700] ml-[12px]"> Approvals </p>
        </div>
      </div>
      <div className="px-[29px] mt-[44px]">
        <hr></hr>
      </div>
      <div className="mt-[29px] ml-[29px] cursor-pointer">
        <p className="text-[11px] font-[400]"> MY ACCOUNT </p>
        <div className="flex mt-[12px]">
          <img src={ IconMyclients } alt='' />
          <p className="text-[16px] font-[700] ml-[12px]"> My clients </p>
        </div>
        <div className="flex mt-[10px] cursor-pointer">
          <img className="" src={ IconEditProfiles } alt='' />
          <p className="text-[16px] font-[700] ml-[12px]"> Edit profiles </p>
        </div>
      </div>
    </div>
  )
}

export default NavigationMenu