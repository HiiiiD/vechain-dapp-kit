import type { HTMLChakraProps } from '@chakra-ui/react';
import { Button, Icon, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import {
    ConnectWalletModal,
    useWallet,
    useWalletModal,
} from '@vechainfoundation/react-wallet-kit';
import { WalletIcon } from '@heroicons/react/24/solid';
import { AccountDetailModal } from './AccountDetailModal';
import { AddressButton } from './AddressButton';

interface SwitchWalletButtonProps {
    buttonProps?: HTMLChakraProps<'button'>;
}

export const SwitchWalletButton: React.FC<SwitchWalletButtonProps> = ({
    buttonProps,
}): React.ReactElement => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { account, source } = useWallet();

    const { open } = useWalletModal();

    if (account && source)
        return (
            <>
                <AccountDetailModal
                    address={account}
                    isOpen={isOpen}
                    onClose={onClose}
                    source={source}
                />
                <AddressButton
                    {...buttonProps}
                    address={account}
                    onClick={onOpen}
                    showCopyIcon={false}
                />
            </>
        );

    return (
        <>
            <ConnectWalletModal />

            <Button
                {...buttonProps}
                leftIcon={<Icon as={WalletIcon} />}
                onClick={open}
            >
                Connect Wallet
            </Button>
        </>
    );
};
