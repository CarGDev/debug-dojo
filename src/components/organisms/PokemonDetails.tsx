import React from 'react';
import { Card, Row, Col, Tag, Progress, Typography, Image } from 'antd';
import type { Pokemon } from '@pokemonTypes/pokemon';
import styles from '@styles/app.module.scss';

const { Title, Text } = Typography;

interface PokemonDetailsProps {
  pokemon: Pokemon | null;
  loading?: boolean;
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = ({
  pokemon,
  loading = false
}) => {
  if (loading) {
    return (
      <Card loading={true} className={styles.pokemonCard}>
        <div style={{ height: 400 }} />
      </Card>
    );
  }

  if (!pokemon) {
    return null;
  }

  // Intentional bug #3: Incorrect stat mapping
  // Speed and defense are swapped in the display
  const getStatName = (statName: string): string => {
    switch (statName) {
      case 'speed':
        return 'defense'; // Bug: showing defense instead of speed
      case 'defense':
        return 'speed'; // Bug: showing speed instead of defense
      default:
        return statName;
    }
  };

  return (
    <Card className={styles.pokemonCard}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <div style={{ textAlign: 'center' }}>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={200}
              height={200}
              className={styles.pokemonImage}
            />
            <Title level={2} className={styles.pokemonName}>
              {pokemon.name}
            </Title>
            <div className={styles.pokemonTypes}>
              {pokemon.types.map((type) => (
                <Tag key={type.type.name} color="blue" className={styles.typeTag}>
                  {type.type.name.toUpperCase()}
                </Tag>
              ))}
            </div>
            <Text type="secondary">
              Height: {pokemon.height / 10}m | Weight: {pokemon.weight / 10}kg
            </Text>
          </div>
        </Col>
        <Col xs={24} md={16}>
          <Title level={3}>Base Stats</Title>
          <div className={styles.pokemonStats}>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className={styles.statItem}>
                <div className={styles.statHeader}>
                  <Text strong className={styles.statName}>
                    {getStatName(stat.stat.name)}:
                  </Text>
                  <Text>{stat.base_stat}</Text>
                </div>
                <Progress
                  percent={(stat.base_stat / 255) * 100}
                  showInfo={false}
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Card>
  );
}; 