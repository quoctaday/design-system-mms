import React from 'react';
import { Section, Container, Flex, Grid, Box, Heading, Text, Card, Button } from '../components/ui';

export const LayoutDemo = () => {
  return (
    <Section size="3">
      <Container size="4">
        <Flex direction="column" gap="6">
          {/* Header Section */}
          <Flex direction={{ initial: 'column', md: 'row' }} justify="between" align={{ initial: 'start', md: 'center' }} gap="4">
            <Box>
              <Heading size="6" weight="bold">WDS-R Layout System</Heading>
              <Text color="subtle">Hệ thống layout 'Atoms' với khả năng Responsive cực mạnh.</Text>
            </Box>
            <Flex gap="3">
              <Button variant="outline">Tài liệu</Button>
              <Button variant="solid">Bắt đầu ngay</Button>
            </Flex>
          </Flex>

          {/* Grid Section */}
          <Grid columns={{ initial: '1', sm: '2', lg: '4' }} gap="4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item}>
                <Box p="4">
                  <Text weight="bold">Cột {item}</Text>
                  <Text size="2">Tự động thay đổi số cột dựa trên kích thước màn hình.</Text>
                </Box>
              </Card>
            ))}
          </Grid>

          {/* Complex Box nesting */}
          <Box 
            p="5" 
            className="wds-r-bg-subtle" /* Giả định class này tồn tại */
            display={{ initial: 'none', md: 'block' }}
          >
            <Flex gap="4" align="center">
              <Box p="3" className="wds-r-bg-panel" style={{ borderRadius: '8px' }}>
                🚀
              </Box>
              <Box>
                <Text weight="medium">Tính năng chỉ hiện trên Desktop</Text>
                <Text size="1">Sử dụng display prop responsive.</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default LayoutDemo;
