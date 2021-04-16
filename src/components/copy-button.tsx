import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { CheckCircleIcon, CopyIcon, SpinnerIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface CopyButtonProps extends IconButtonProps {
  copyCallback: () => Promise<string>;
}
export const CopyButton = ({
  copyCallback,
  ...iconButtonProps
}: CopyButtonProps) => {
  const [hasCopied, _setHasCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const setHasCopied = () => {
    _setHasCopied(true);
    setTimeout(() => _setHasCopied(false), 5000);
  };

  const handleCopyButtonClick = async () => {
    setLoading(true);
    copyCallback().then((copyValue) => {
      navigator.clipboard.writeText(copyValue);
      setLoading(false);
      setHasCopied();
    });
  };
  if (loading) {
    return (
      // @TODO: this is not really a good idea as this is actually not a button
      <IconButton
        {...iconButtonProps}
        icon={<SpinnerIcon color="gray.400" />}
        _hover={{ cursor: "initial" }}
      />
    );
  }
  if (hasCopied) {
    // @TODO: this is not really a good idea as this is actually not a button
    return (
      <IconButton
        {...iconButtonProps}
        icon={<CheckCircleIcon color="green.400" />}
        _hover={{ cursor: "initial" }}
      />
    );
  }

  return <IconButton onClick={handleCopyButtonClick} {...iconButtonProps} />;
};
