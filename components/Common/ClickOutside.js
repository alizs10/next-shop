import useAppStore from '../../stores/app-store';

function ClickOutside() {

    const { onClickOutside, clickOutside } = useAppStore()

    return (
        clickOutside && (
            <div onClick={onClickOutside} className="fixed top-0 left-0 bottom-0 right-0 z-[9000]"></div>
        )
    );
}

export default ClickOutside;