import React, { useState } from "react";
import axios from "axios";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { DefaultButton } from "@bit/limebit.limebit-ui.default-button";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import {
  Stack,
  Box,
  FormControl,
  Input,
  FormLabel,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import { ButtonLink } from "./button-link";
interface Status {
  submitted: boolean;
  submitting: boolean;
  info: { error: boolean; msg: string | null };
}
export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        ...status,
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/moqplyvp",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <>
      <DefaultText
        fontWeight="bold"
        textTransform="uppercase"
        marginBottom="10"
      >
        Falls ihr Feedback habt oder Open Discourse mit spannenden Ideen
        unterstützen wollt, kontaktiert uns immer gerne. Wir freuen uns auf
        euch!
      </DefaultText>
      <Box display="inline-block" marginBottom="20">
        <Stack justifyContent="left" spacing="3">
          <ButtonLink
            href="https://www.instagram.com/opendiscourse.de/"
            justifyContent="left"
            colorScheme="pink"
            rightIcon={undefined}
            fontSize={{ base: "lg", md: "xl", xl: "4xl" }}
            leftIcon={<FaInstagramSquare />}
            isExternal
          >
            <DefaultText
              fontSize={{ base: "md", md: "md", xl: "2xl" }}
              fontWeight="bold"
              margin="0"
            >
              Instagram
            </DefaultText>
          </ButtonLink>
          {/* <ButtonLink
            href="https://www.instagram.com/opendiscourse.de/"
            justifyContent="left"
            colorScheme="pink"
            rightIcon={undefined}
            fontSize={{ base: "lg", md: "xl", xl: "4xl" }}
            leftIcon={<FaFacebookSquare />}
          >
            <DefaultText
              fontSize={{ base: "md", md: "md", xl: "2xl" }}
              fontWeight="bold"
              margin="0"
            >
              Facebook
            </DefaultText>
          </ButtonLink> */}
          <ButtonLink
            href="https://twitter.com/OpenDiscourseDE"
            justifyContent="left"
            colorScheme="pink"
            rightIcon={undefined}
            fontSize={{ base: "lg", md: "xl", xl: "4xl" }}
            leftIcon={<FaTwitterSquare />}
          >
            <DefaultText
              fontSize={{ base: "md", md: "md", xl: "2xl" }}
              fontWeight="bold"
              margin="0"
            >
              Twitter
            </DefaultText>
          </ButtonLink>
        </Stack>
      </Box>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Box width={{ base: "100%", md: "50%" }}>
          <DefaultHeadline size="s">Kontakt</DefaultHeadline>
          <form onSubmit={handleOnSubmit}>
            <FormControl id="name" marginBottom="5" isRequired>
              <Input
                onChange={handleOnChange}
                variant="unstyled"
                type="text"
                value={inputs.name}
                borderBottom="2px solid"
                borderRadius="unset"
              />
              <FormLabel textTransform="uppercase" fontWeight="bold">
                Name
              </FormLabel>
            </FormControl>
            <FormControl id="email" name="_replyto" isRequired>
              <Input
                onChange={handleOnChange}
                variant="unstyled"
                type="email"
                value={inputs.email}
                borderBottom="2px solid"
                borderRadius="unset"
              />
              <FormLabel textTransform="uppercase" fontWeight="bold">
                E-Mail
              </FormLabel>
            </FormControl>
            <FormControl id="message" isRequired>
              <Textarea
                variant="unstyled"
                borderBottom="2px solid"
                borderRadius="unset"
                value={inputs.message}
                onChange={handleOnChange}
                size="sm"
              />
              <FormLabel textTransform="uppercase" fontWeight="bold">
                Ihre Nachricht
              </FormLabel>
            </FormControl>
            {status.info.error && (
              <DefaultText color="pink.500">
                Leider ist ein Fehler aufgetreten, das Tut uns leid! Schreiben
                Sie uns gerne direkt unter zwischenruf@opendiscourse.de
              </DefaultText>
            )}
            {!status.info.error && status.info.msg && (
              <p>Danke, wir haben Ihre Nachricht erhalten!</p>
            )}
            <DefaultButton
              marginTop={{ base: 5 }}
              colorScheme="pink"
              type="submit"
            >
              Versenden
            </DefaultButton>
          </form>
        </Box>
        <Box
          width={{ base: "100%", md: "50%" }}
          marginLeft={{ base: 0, md: 10, lg: 20 }}
          marginTop={{ base: 10, md: "unset" }}
        >
          <Box marginBottom={{ base: 5, md: 10, lg: 10 }}>
            <DefaultText as="span">
              <b>Adresse</b>
            </DefaultText>
            <DefaultText as="div">
              Limebit GmbH <br />
              Prinz-Eugen-Straße 38 <br />
              13347 Berlin
            </DefaultText>
          </Box>
          <Box marginBottom={{ base: 5, md: 10, lg: 10 }}>
            <DefaultText as="span">
              <b>Kontakt</b>
            </DefaultText>
            <DefaultText as="div">
              zwischenruf@opendiscourse.de <br />
              www.limebit.de <br />
              +49 (0) 30 - 120 86 0 64
            </DefaultText>
          </Box>
          <DefaultText as="div" display="flex" alignItems="center">
            Open Discourse ist ein Herzensprojekt der Limebit GmbH &hearts;
          </DefaultText>
        </Box>
      </Flex>
    </>
  );
};
