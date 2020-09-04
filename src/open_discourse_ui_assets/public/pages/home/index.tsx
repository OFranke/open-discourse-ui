import { BaseTemplate } from "../../templates/base-template";
import {
  Heading,
  Image,
  Flex,
  Stack,
  Text,
  Box,
  Divider,
  Link,
} from "@chakra-ui/core";
import { Container } from "../../components/container";
import React from "react";
import { theming } from "../../templates/theming";
import { FaTwitter } from "react-icons/fa";
import { SearchForm } from "../../components/search-form";
import { SearchResult } from "../../components/search-result";

export const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <Stack
        minHeight="100vh"
        background={theming.backgroundYellow}
        minWidth="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <Stack textAlign="center">
          <Heading
            alignSelf="center"
            as="h1"
            size="2xl"
            width="fit-content"
            paddingX="0.5rem"
            backgroundColor="white"
            color={theming.backgroundYellow}
            textShadow="1px 3px 6px rgba(0, 0, 0, .1)"
            fontFamily="Ubuntu"
          >
            Open Discourse analysiert politische
          </Heading>
          <Heading
            alignSelf="center"
            as="h1"
            size="2xl"
            width="fit-content"
            paddingX="0.5rem"
            backgroundColor="white"
            color={theming.backgroundYellow}
            textShadow="1px 3px 6px rgba(0, 0, 0, .1)"
            fontFamily="Ubuntu"
          >
            Sprache in Deutschland
          </Heading>
          <Text color="white" maxW="6xl" fontSize="1.2em" paddingY="1rem">
            Open Discourse hat die Plenarprotokolle des deutschen Bundestags
            seit 1949 lesbar gemacht - und zwar für Mensch und Maschinen. Die
            Plattform erleichtert den Zugang zu den über 800.000 Redebeiträgen
            der letzten 70 Jahre und demokratisiert die Analyse von politischen
            Debatten im Parlament. Open Discourse ist somit die erste
            strukturierte und umfassendste Aufbereitung jedes jemals
            gesprochenen Wortes in den Parlamentssitzungen des deutschen
            Bundestages.
          </Text>
          <Flex justifyContent="center" color="white">
            <Stack paddingX="4rem">
              <Text fontSize="32px">331.197</Text>
              <Text>Seiten Text</Text>
            </Stack>
            <Stack paddingX="4rem">
              <Text fontSize="32px">846.628</Text>
              <Text>Redebeiträge</Text>
            </Stack>
            <Stack paddingX="4rem">
              <Text fontSize="32px">2.255.102</Text>
              <Text>{"Reaktionen & Zwischenrufe"}</Text>
            </Stack>
          </Flex>
        </Stack>
      </Stack>
      <Container>
        <Flex>
          <Box flexBasis="100%">
            <Image
              src="https://www.opendiscourse.de/images/protokoll3.jpg"
              alt="Protokoll3"
              marginRight="1rem"
            />
          </Box>
          <Stack
            flexBasis="100%"
            justifyContent="space-around"
            marginLeft="1rem"
          >
            <Heading
              width="fit-content"
              paddingX="0.5rem"
              as="h2"
              size="xl"
              backgroundColor={theming.backgroundYellow}
              color="white"
              textShadow="1px 3px 6px rgba(0, 0, 0, .1)"
              fontFamily="Ubuntu"
            >
              Das Projekt
            </Heading>
            <Text>
              Open Discourse ist ein forschungsbasiertes Datenprojekt an der
              Schnittstelle zwischen Politikwissenschaft und Künstlicher
              Intelligenz. Mittels moderner Machine Learning und Data Science
              Methoden können die Plenarprotokolle des Deutschen Bundestags seit
              1949 auf der Plattform frei zugänglich analysiert und auf Muster
              untersucht werden.
            </Text>
            <Text>
              In der technischen Vorbereitung wurden alle Plenarprotokolle des
              Bundestages von uns maschinenlesbar aufbereitet und zusammen mit
              zahlreichen Metainformationen in eine Datenbank überführt. Mittels
              Werkzeugen aus Deep- und Machine Learning wollen wir die Debatten
              im Plenearsaal für die Gemeinheit öffnen, politische
              Diskursanalyse demokratisieren und gemeinsam mit allen
              Interessierten einer Fragen nachgehen: Wie hat sich politischer
              Diskurs in den letzten 70 Jahren verändert?
            </Text>
            <Text>#sciencematters</Text>
          </Stack>
        </Flex>
      </Container>
      <Container>
        <Flex>
          <Box flexBasis="100%">
            <Image
              src="https://www.opendiscourse.de/images/Reichstag_Giebel2.jpg"
              alt="Protokoll3"
              marginRight="1rem"
            />
          </Box>
          <Stack
            flexBasis="100%"
            justifyContent="space-around"
            marginLeft="1rem"
          >
            <Heading
              width="fit-content"
              paddingX="0.5rem"
              as="h2"
              size="xl"
              backgroundColor={theming.backgroundYellow}
              color="white"
              textShadow="1px 3px 6px rgba(0, 0, 0, .1)"
              fontFamily="Ubuntu"
            >
              Das Warum
            </Heading>
            <Text>
              Der deutsche Bundestag - unser hohes Haus - ist das
              parlamentarische Herz unserer Demokratie. Im Grundgesetz ist
              definiert, dass der Bundestag öffentlich verhandelt und dass die
              Abgeordneten die Vertreter_Innen des gesamten Volkes sind. Seit
              1949 wird für jede Plenarsitzung ein stenografischer Bericht
              angefertigt, der jedes gesagte Wort der Sitzung dokumentiert.
              Diese Protokolle liegen nun alle auf den Servern des Bundestages
              und sind öffentlich abrufbar, allerdings ist das Format der
              Protokolle nicht für eine sinnvolle Datenverarbeitung im 21.
              Jahrhundert geeignet.
            </Text>
            <Text>
              Hier haben wir uns zur Aufgabe gemacht, die im Grundgesetz
              definierte Öffentlichkeit des Bundestages durch moderne Wege der
              Datenverarbeitung wieder herzustellen, um jeder Bürgerin und jedem
              Bürger die Möglichkeit zu geben, den politischen Diskurs zu
              verfolgen und zu untersuchen.
            </Text>
            <Text>
              Open Discourse ist die Verlängerung des Versprechens am
              Reichstagsgebäude “Dem deutschen Volke”.
            </Text>
          </Stack>
        </Flex>
      </Container>
      <Container>
        <Flex>
          <Box flexBasis="100%">
            <Image
              src="https://www.opendiscourse.de/images/method.jpg"
              alt="Protokoll3"
              marginRight="1rem"
            />
          </Box>
          <Stack
            flexBasis="100%"
            justifyContent="space-around"
            marginLeft="1rem"
          >
            <Heading
              width="fit-content"
              paddingX="0.5rem"
              as="h2"
              size="xl"
              backgroundColor={theming.backgroundYellow}
              color="white"
              textShadow="1px 3px 6px rgba(0, 0, 0, .1)"
              fontFamily="Ubuntu"
            >
              Die Herangehensweise
            </Heading>
            <Text>
              Wir haben mit verschiedenen Methoden der Informatik und
              Computerlinguistik die Plenarprotokolle aufgebrochen und können
              nun alle Redebeiträge, Zwischenrufe, Rückfragen etc. den
              jeweiligen Politiker_Innen und Fraktionen zuordnen. Zusätzlich
              haben wir diese Daten durch weitere Hintergrundinformationen zu
              allen Politikern, Ämtern uvm. angereichert.
            </Text>
            <Text>
              Open Discourse verfügt somit über eine Datenbank, die jedes bisher
              in Plenarsitzungen gesprochene Wort strukturiert abbildet und
              sowohl für Menschen als auch Maschinen lesbar zur Verfügung
              stellt.
            </Text>
            <Text>
              Aufgrund dieser Datengrundlage können wir nun Algorithmen aus den
              Bereichen NLP (Natural Language Processing), Machine Learning,
              Deep Learning etc. auf die Daten anwenden, um Fragen zu
              beantworten, die bisher nicht (ohne großen Aufwand) beantwortbar
              waren.
            </Text>
          </Stack>
        </Flex>
      </Container>
      <Container>
        <Flex>
          <Box flexBasis="100%">
            <Image
              src="https://www.opendiscourse.de/images/public_science.jpg"
              alt="Protokoll3"
              marginRight="1rem"
            />
          </Box>
          <Stack
            flexBasis="100%"
            justifyContent="space-around"
            marginLeft="1rem"
          >
            <Heading
              width="fit-content"
              paddingX="0.5rem"
              as="h2"
              size="xl"
              backgroundColor={theming.backgroundYellow}
              color="white"
              textShadow="1px 3px 6px rgba(0, 0, 0, .1)"
              fontFamily="Ubuntu"
            >
              Die Aussichten
            </Heading>
            <Text>
              Open Discourse ist ein laufendes Forschungsprojekt, welches sich
              derzeit in der Test- und Feedbackphase befindet.
            </Text>
            <Text>
              Im Sommer 2020 soll die interaktive Analyseplattform auf dieser
              Website veröffentlicht werden und als politikwissenschaftliches
              Tool für die Gesellschaft frei zugänglich sein.
            </Text>
            <Text>
              Bürger_Innen, Journalist_Innen und Wissenschaftler_Innen können
              dann über die Funktionen der Plattform Anfragen an den politischen
              Diskurs im Bundestag stellen und die Ergebnisse für Ihre Arbeit,
              Forschung und natürlich für das eigene Interesse nutzen. Der
              datenbasierte Ansatz unseres Verfahrens sichert die
              Reproduzierbarkeit und Validierbarkeit/Falsifizierbarkeit aller
              Analysen und erfüllt somit den Anspruch der Wissenschaftlichkeit.
            </Text>
          </Stack>
        </Flex>
      </Container>
      <Container>
        <Flex direction="column" maxW="100vw">
          <Heading>Full Text Search</Heading>

          <Flex flex={1} p={4}>
            <SearchForm />
          </Flex >
          <SearchResult />
        </Flex>
      </Container>
      <Stack
        minHeight="100vh"
        background={theming.backgroundYellow}
        minWidth="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <Flex maxW="6xl">
          <Box flexBasis="100%">
            <Image
              src="https://www.opendiscourse.de/images/od_white.png"
              alt="OpenDiscourseLogo"
            />
          </Box>
          <Stack color="white">
            <Heading
              width="fit-content"
              paddingX="0.5rem"
              as="h2"
              size="xl"
              backgroundColor="white"
              color={theming.backgroundYellow}
              textShadow="1px 3px 6px rgba(0, 0, 0, .1)"
              fontFamily="Ubuntu"
            >
              Über uns
            </Heading>
            <Text>
              Open Discourse ist ein Projekt der Limebit GmbH. Die Initiative
              ist selbst finanziert, unabhängig und aus den Fähigkeiten und
              Motivationen unser Mitarbeiter_Innen gewachsen. Die Plattform ist
              unser Beitrag zur Demokratisierung des Zugangs politischer Themen
              und Akteure_Innen und eine Herzensangelegenheit. Möchten Sie uns
              Feedback geben oder haben Sie Interesse Ihre Fähigkeiten, Ideen
              oder Ihr Netzwerk in irgendeiner Form zur Verfügung zu stellen?
              Bitte zögern Sie nicht uns zu kontaktieren:
            </Text>
            <Flex justifyContent="space-between" paddingTop="4rem">
              <Stack>
                <Text>Adresse</Text>
                <Divider color="white" alignSelf="left" maxW="2rem"></Divider>
                <Text>Limebit GmbH</Text>
                <Text>Prinz-Eugen-Straße 17a</Text>
                <Text>D-13347 Berlin</Text>
                <Link href="https://limebit.de/impressum">Impressum</Link>
                <Link href="https://limebit.de/datenschutz">Datenschutz</Link>
              </Stack>
              <Stack>
                <Text>Kontakt</Text>
                <Divider color="white" alignSelf="left" maxW="2rem"></Divider>
                <Text>zwischenruf@opendiscourse.de</Text>
                <Link href="https://www.limebit.de" textDecor="none">
                  www.limebit.de
                </Link>
                <Text>030 - 120 86 0 64 (ortstarif)</Text>
              </Stack>
              <Stack>
                <Text>Folge uns</Text>
                <Divider color="white" alignSelf="left" maxW="2rem"></Divider>
                <Link
                  href="https://twitter.com/OpenDiscourseDE"
                  textDecor="none"
                >
                  <Box as={FaTwitter} />
                </Link>
              </Stack>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </BaseTemplate>
  );
};
